from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')


@app.route('/script.js')
def script():
    return send_from_directory('.', 'script.js')

@app.route('/style.css')
def style():
    return send_from_directory('.', 'style.css')

def convertir(valor, origen, destino):
    conversiones = {
        ('celsius', 'fahrenheit'): lambda v: v * 9/5 + 32,
        ('fahrenheit', 'celsius'): lambda v: (v - 32) * 5/9,
        ('celsius', 'celsius'): lambda v: v,
        ('fahrenheit', 'fahrenheit'): lambda v: v,
    }
    clave = (origen, destino)
    if clave in conversiones:
        return round(conversiones[clave](valor), 2)
    return None

@app.route('/convertir', methods=['POST'])
def convertir_grados():
    datos = request.json
    valor = datos.get('valor')
    origen = datos.get('origen')
    destino = datos.get('destino')

    if valor is None or origen is None or destino is None:
        return jsonify({"error": "Faltan datos"}), 400

    try:
        valor = float(valor)
    except ValueError:
        return jsonify({"error": "El valor debe ser numérico"}), 400

    resultado = convertir(valor, origen, destino)
    if resultado is None:
        return jsonify({"error": "Conversión no soportada"}), 400

    return jsonify({"resultado": resultado}), 200

if __name__ == '__main__':
    app.run(debug=True)