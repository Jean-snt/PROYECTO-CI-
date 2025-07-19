import json
from app import app

def test_convertir_celsius_a_fahrenheit():
    cliente = app.test_client()
    respuesta = cliente.post('/convertir', json={
        "valor": 0,
        "origen": "celsius",
        "destino": "fahrenheit"
    })

    datos = respuesta.get_json()
    assert respuesta.status_code == 200
    assert datos["resultado"] == 32.0

def test_convertir_fahrenheit_a_celsius():
    cliente = app.test_client()
    respuesta = cliente.post('/convertir', json={
        "valor": 32,
        "origen": "fahrenheit",
        "destino": "celsius"
    })

    datos = respuesta.get_json()
    assert respuesta.status_code == 200
    assert datos["resultado"] == 0.0
