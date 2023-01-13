What is it?

Requirements to Run:
    - docker
    - shell terminal

How do you use it?
    - run the `run.sh` file, this will start up the application in docker compose
    - you can check that things are running properly by hitting the endpoint with curl:
    ```bash
     curl -H 'Content-Type: application/json' -d '{"fruit":"pineapple"}' -X POST http://localhost:8080/price
    ```
    - you can use the fruits "apple", "pear", or "pineapple"