var AWS = require('aws-sdk');
AWS.config.update({region: 'ap-southeast-2'});
var ec2 = new AWS.EC2();

ec2.describeVolumes({},(err, data)=>{
    if(err)console.log('Error', err.stack);
    else{
        var i = 1;
        data.Volumes.forEach((item, index, arr)=>{
            console.log(i, item.VolumeId, item.State)
            i++;
        })
    }
})
