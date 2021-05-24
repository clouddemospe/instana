helm install --create-namespace --namespace instana-autotrace-webhook instana-autotrace-webhook \
  --repo https://agents.instana.io/helm instana-autotrace-webhook \
  --set webhook.imagePullCredentials.password=uBp4GXpZQpKrHxMXNcvInQ \
  --set openshift.enabled=true
