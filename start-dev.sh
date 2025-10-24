#!/bin/bash

echo "Starting Surya's Portfolio Development Environment..."
echo

echo "Starting Backend Server..."
cd backend && npm run dev &
BACKEND_PID=$!

sleep 3

echo "Starting Frontend Server..."
cd ../frontend && npm run dev &
FRONTEND_PID=$!

echo
echo "Both servers are starting up..."
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:5173"
echo
echo "Press Ctrl+C to stop both servers..."

# Function to cleanup background processes
cleanup() {
    echo "Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit
}

# Trap Ctrl+C
trap cleanup SIGINT

# Wait for processes
wait
