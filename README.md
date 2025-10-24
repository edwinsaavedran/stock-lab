# 🧪 Stock-Lab - Simulación de Inconsistencia en Sistemas Distribuidos

Este laboratorio demuestra cómo múltiples servicios pueden generar inconsistencias en el stock si no hay mecanismos de control concurrente.

## 🚀 Instrucciones

1. Descomprime el proyecto
2. Desde la raíz, ejecuta:
   ```bash
   docker-compose up --build
   ```
3. Observa en consola los logs de cliente A, B y C accediendo al stock en secuencia.

## 📦 Flujo simulado

- Cliente A ve 10, resta 3 → guarda 7
- Cliente B también ve 10, resta 2 → guarda 8 ❗ (pierde lo de A)
- Cliente C ve 8, resta 8 → guarda 0 (esperado 5)

## 🧠 Reflexión

Este laboratorio permite observar:

- Condiciones de carrera
- Inconsistencia de datos
- Necesidad de mecanismos como: locks, semáforos, colas, transacciones

---