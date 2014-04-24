#!/bin/bash
count=1
while [ $count -le 10000 ]
do
        echo "$count"
        curl --data 'username=eviloverlord&score=42&grid={}' http://limitless-harbor-3229.herokuapp.com/submit.json
        (( count++ ))
done