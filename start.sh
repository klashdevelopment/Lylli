sh ./client.sh &
PIDNPM=$!

trap "kill $PIDSVR" EXIT

sh ./server.sh &
PIDSVR=$!

wait $PIDNPM