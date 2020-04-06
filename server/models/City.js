/* *This file is for data modeling.
It has functions that does the DB query 
 */
const mongoose=require('mongoose');
const citySchema=new mongoose.Schema(
{	name:{type:String,unique:true},
    des:String,
    shortDes:String,
});


citySchema.statics.findAllCity=function(callback)
{
	this.find({

	},function(err,data)
	{		if(!err){
				callback(null,data);
			}
			else{
				callback(err,null);
			}
				
	})
};

citySchema.statics.editCity=function(cityDetail, callback)
{
	this.findOne({
		_id:cityDetail._id
	},function(err,data)
	{		if(!err){
			data.name=cityDetail.name;
			data.des=cityDetail.des;
			data.shortDes=cityDetail.shortDes;
				data.save(function(err){
					if(err)
						callback(err,null);
					else
					callback(null,data);
				})
				
			}
			else{
				callback(err,null);
			}
				
	})
};

citySchema.statics.saveCity=function(cityDetails, callback){
    console.log(" city name: ",cityDetails.name)		
    console.log(" city des: ",cityDetails.des)		
    console.log(" city shortDes: ",cityDetails.shortDes)		
	this.create({
		name:cityDetails.name,
        des:cityDetails.des,
		shortDes:cityDetails.shortDes
    
	},function(err,result)
	{
		if(!err){
            console.log('Data inserted successfully...');
            callback(null, result);
        }
        else{
            console.log('Data Error');

            callback(err, null);
        }            
	});
     
};
citySchema.statics.deleteCity=function(cityId, callback)
{		console.log("deleteCity id",cityId);
	this.findOne({
		_id:cityId
    
	}).remove( ).exec();
	callback(null, 'Deleted');
     
};

module.exports=mongoose.model('cities',citySchema);
