git pull
docker build . -t utda/sim_kunshujo:1.0
docker stop sim_kunshujo
docker rm sim_kunshujo
docker run --name sim_kunshujo -itd -p 8023:5000 utda/sim_kunshujo:1.0
