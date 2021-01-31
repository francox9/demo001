# demo001
A practise project using vue3, nest.js, graphql-js, apollo-client, localstack, AWS(DynamoDB, ECS, ElasticBeanstalk etc.), docker, buildkite (and possibly k8s)
The project will re-implement the google form (incl. builder)

## Phases
1. Complete a basic version of frontends, with nest.js+graphql server returning fake data
2. Dockerise components, and use localstack + dynamoDB to do actual data persistent
3. Setup AWS(DynamoDB, ECS, ElasticBeanstalk) to publish the product and buildkite for CICD
 