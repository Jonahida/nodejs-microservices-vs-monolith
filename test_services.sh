#!/bin/bash

# Función para crear una tarea
create_task() {
  echo "Creando tarea..."
  curl -X POST http://localhost:8080/tareas/ \
      -d '{"userId": "1", "title": "Test Task", "message": "test"}' \
      -H "Content-Type: application/json"
  echo -e "\n"
}

# Función para obtener todas las tareas
get_tasks() {
  echo "Obteniendo todas las tareas..."
  curl -X GET http://localhost:8080/tareas/
  echo -e "\n"
}

# Función para enviar una notificación
send_notification() {
  echo "Enviando notificación..."
  curl -X POST http://localhost:8080/notificaciones/ \
      -d '{"userId": "1", "message": "test"}' \
      -H "Content-Type: application/json"
  echo -e "\n"
}

# Función para crear un usuario
create_user() {
  echo "Creando usuario..."
  curl -X POST http://localhost:8080/usuarios/ \
      -H "Content-Type: application/json" \
      -d '{"name": "John Doe", "email": "john.doe@example.com"}'
  echo -e "\n"
}

# Función para obtener todos los usuarios
get_users() {
  echo "Obteniendo todos los usuarios..."
  curl -X GET http://localhost:8080/usuarios/
  echo -e "\n"
}

# Menú principal
main() {
  while true; do
    echo "==================================="
    echo "  Menú de opciones - Test de servicios"
    echo "==================================="
    echo "1. Crear tarea"
    echo "2. Obtener todas las tareas"
    echo "3. Enviar notificación"
    echo "4. Crear usuario"
    echo "5. Obtener todos los usuarios"
    echo "6. Salir"
    echo "==================================="
    read -p "Elige una opción: " choice

    case $choice in
      1)
        create_task
        ;;
      2)
        get_tasks
        ;;
      3)
        send_notification
        ;;
      4)
        create_user
        ;;
      5)
        get_users
        ;;
      6)
        echo "Saliendo del script..."
        exit 0
        ;;
      *)
        echo "Opción inválida. Por favor, elige una opción válida."
        ;;
    esac
  done
}

# Ejecutar el menú principal
main
