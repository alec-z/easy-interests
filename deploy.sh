SHA=$(git rev-parse HEAD)
docker build -t aleczheng/interests-front -t aleczheng/interests-front:$SHA -f ./interests-front/Dockerfile ./interests-front || return 1
docker build -t aleczheng/interests-back -t aleczheng/interests-back:$SHA -f ./interests-back/Dockerfile ./interests-back || return 1

docker push aleczheng/interests-front:latest
docker push aleczheng/interests-front:$SHA

docker push aleczheng/interests-back:latest
docker push aleczheng/interests-back:$SHA

kubectl apply -f google_k8s

kubectl set image deployments/interests-front-deployment interests-front=aleczheng/interests-front:$SHA
kubectl set image deployments/interests-back-deployment interests-back=aleczheng/interests-back:$SHA
