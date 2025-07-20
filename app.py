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

@app.route('/convertir', methods=['POST'])
def convertir_grados():
    datos = request.json

    if not datos:
        return jsonify({"error": "No se recibieron datos"}), 400

    valor = datos.get('valor')
    unidad_origen = datos.get('origen')
    unidad_destino = datos.get('destino')

    if valor is None or unidad_origen is None or unidad_destino is None:
        return jsonify({"error": "Faltan datos"}), 400

    try:
        valor = float(valor)
    except:
        return jsonify({"error": "El valor debe ser un número"}), 400

    resultado = None

    if unidad_origen == 'celsius':
        if unidad_destino == 'fahrenheit':
            resultado = valor * 9/5 + 32
        elif unidad_destino == 'celsius':
            resultado = valor
        else:
            return jsonify({"error": "Conversión no válida"}), 400
    elif unidad_origen == 'fahrenheit':
        if unidad_destino == 'celsius':
            resultado = (valor - 32) * 5/9
        elif unidad_destino == 'fahrenheit':
            resultado = valor
        else:
            return jsonify({"error": "Conversión no válida"}), 400
    else:
        return jsonify({"error": "Unidad de origen no válida"}), 400

    return jsonify({"resultado": round(resultado, 2)}), 200

if __name__ == '__main__':
    app.run(debug=True)
