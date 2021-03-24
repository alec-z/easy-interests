docker build -t aleczheng/interests-front:lastest -t aleczheng/interests-front:$SHA -f ./interests-front/Dockerfile ./interests-front
docker push aleczheng/interests-front:lastest
docker push aleczheng/interests-front:$SHA

docker build -t aleczheng/interests-back:lastest -t aleczheng/interests-back:$SHA -f ./interests-back/Dockerfile ./interests-back
docker push aleczheng/interests-back:lastest
docker push aleczheng/interests-front:$SHA

kubectl apply -f google_k8s

kubectl set image deployments/interests-front-deployment interests-front=aleczheng/interests-front:$SHA
kubectl set image deployments/interests-back-deployment interests-back=aleczheng/interests-back:$SHA
