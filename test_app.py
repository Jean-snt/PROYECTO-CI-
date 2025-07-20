from app import app

def test_saludo():
    cliente = app.test_client()
    r = cliente.get('/')
    assert r.status_code == 400
