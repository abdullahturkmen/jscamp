export class BaseLogger{
    log(data) {
        console.log("Default Logger : " + data)
    }

}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("logged to Elastic : " + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("logged to Mongo : " + data)
    }
}