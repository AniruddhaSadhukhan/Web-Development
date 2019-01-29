Install MongoDB
-------------------------------
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
-------------------------------
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org


-------------------------------------------------------
Starting MongoDB

->Creating Custom DB location
mkdir data
echo "mongod --dbpath=data --nojournal" > mongod
chmod a+x mongod

->Starting DB
Go to directory containing mongod created in previous step
./mongod




