var like =document.getElementById('like');
var tweet=document.getElementById('tweet');
var share=document.getElementById('share');
var date1=document.getElementById('date');
var go = document.getElementById('btn');

var data;
function getdata()
{
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function()
    {
        if(xhttp.readyState==4 && xhttp.status==200)
        {
            data=JSON.parse(xhttp.response);
            console.log(data);
        }
    };
    xhttp.open("GET","set.json",true);
    xhttp.send();
}

like.addEventListener('click',function card()
{
    document.querySelector('.demo').innerHTML='';
    var span = document.querySelector("div");
    var classes = span.classList;
    sorting=function() 
    {
        var result = classes.toggle("c");
        if(result) 
        {
            data.sort(function(a,b)
            {
                return b.likes-a.likes;
            })
        } 
        else 
        {
            data.sort(function(a,b)
            {
                return a.likes-b.likes;
            })
        }
    }
    sorting();
    for(var i in data)
    {
        document.querySelector('.demo').insertAdjacentHTML('afterbegin',

        `<div class="box">
        <h3>
        <img src=${data[i].img} style="width: 100px;height:100px;border-radius: 50px;">
        <span> ${data[i].Name} </span>
        </h3>
        <table style="margin-top:60px;">
        <tr>
        <th style="padding-left: 45px;">Likes </th>
        <th style="padding-left: 45px;">Tweets</th>
        <th style="padding-left: 45px;"> Share</th>
        </tr>
        <tr>
        <td style="padding-left: 45px;"> ${data[i].likes}</td>
        <td style="padding-left: 45px;"> ${data[i].Tweets}</td>
        <td style="padding-left: 45px;"> ${data[i].Shares} </td>

        </tr>
        </table>
        <br>
        <label> Posted On:</label>
        <span > ${data[i].Date} </span>
        </div>`);
    }
});


    //Tweets
    var divT=document.createElement('div')
    divT.setAttribute('class','bx1')

    tweet.addEventListener('click',function card(){
    document.querySelector('.demo').innerHTML='';
    var classes=divT.classList;
    sorting=function() 
    {
        var result = classes.toggle("c");
        if(result) 
        {
            data.sort(function(a,b){
            return b.Tweets-a.Tweets;
            })
        } 
        else 
        {
            data.sort(function(a,b){
            return a.Tweets-b.Tweets;
            })
        }
    }
    sorting();
    for(var i in data)
    {
        document.querySelector('.demo').insertAdjacentHTML('afterbegin',

        `<div class="box">
        <h3>
        <img src=${data[i].img} style="width: 100px;height:100px;border-radius: 50px;">
        <span> ${data[i].Name} </span>
        </h3>
        <table style="margin-top:60px;">
        <tr>
        <th style="padding-left: 45px;">Likes </th>
        <th style="padding-left: 45px;">Tweets</th>
        <th style="padding-left: 45px;"> Share</th>
        </tr>
        <tr>
        <td style="padding-left: 45px;"> ${data[i].likes}</td>
        <td style="padding-left: 45px;"> ${data[i].Tweets}</td>
        <td style="padding-left: 45px;"> ${data[i].Shares} </td>

        </tr>
        </table>
        <br>
        <label> Posted On:</label>
        <span > ${data[i].Date} </span>
        </div>`);
    }});


    //shares
    var ps=document.createElement('p')
    ps.setAttribute('class','p1')

    share.addEventListener('click',function card(){
    document.querySelector('.demo').innerHTML='';
    var classes = ps.classList;
    sorting=function() {
    var result = classes.toggle("c");
    if(result) {
    data.sort(function(a,b){
    return b.Shares-a.Shares;
    })


    } else {
    data.sort(function(a,b){
    return a.Shares-b.Shares;
    })

    }
    }
    sorting();
    for(var i in data){

    document.querySelector('.demo').insertAdjacentHTML('afterbegin',

    `<div class="box">
    <h3>
    <img src=${data[i].img} style="width: 100px;height:100px;border-radius: 50px;">
    <span> ${data[i].Name} </span>
    </h3>
    <table style="margin-top:60px;">
    <tr>
    <th style="padding-left: 45px;">Likes </th>
    <th style="padding-left: 45px;">Tweets</th>
    <th style="padding-left: 45px;"> Share</th>
    </tr>
    <tr>
    <td style="padding-left: 45px;"> ${data[i].likes}</td>
    <td style="padding-left: 45px;"> ${data[i].Tweets}</td>
    <td style="padding-left: 45px;"> ${data[i].Shares} </td>

    </tr>
    </table>
    <br>
    <label> Posted On:</label>
    <span > ${data[i].Date} </span>
    </div>`);
    }});


//date
var sd=document.createElement('span')
sd.setAttribute('class','sd')
date1.addEventListener('click',function card(){
document.querySelector('.demo').innerHTML='';

var classes = sd.classList;
sorting=function() {
var result = classes.toggle("c");
if(result) {
data.sort(function(a,b){

var c=new Date(a.Date);
var d = new Date(b.Date);
return d-c;
})


} else {
data.sort(function(a,b){
var e=new Date(a.Date);
var f = new Date(b.Date);
return e-f;
})

}
} ;
sorting();
for(var i in data)
{
document.querySelector('.demo').insertAdjacentHTML('afterbegin',

`<div class="box">
<h3>
<img src=${data[i].img} style="width: 100px;height:100px;border-radius: 50px;">
<span> ${data[i].Name} </span>
</h3>
<table style="margin-top:60px;">
<tr>
<th style="padding-left: 45px;">Likes </th>
<th style="padding-left: 45px;">Tweets</th>
<th style="padding-left: 45px;"> Share</th>
</tr>
<tr>
<td style="padding-left: 45px;"> ${data[i].likes}</td>
<td style="padding-left: 45px;"> ${data[i].Tweets}</td>
<td style="padding-left: 45px;"> ${data[i].Shares} </td>
</tr>
</table>
<br>
<label> Posted On:</label>
<span > ${data[i].Date} </span>
</div>`);

}});



//input date from -to
var st=document.getElementById('d1');
var ed=document.getElementById('d2');
go.addEventListener('click',function dateFrom()
{
    st=new Date(st.value);
    ed=new Date(ed.value);
    document.querySelector('.demo').innerHTML='';
    for(var i in data)
    {
        var date=new Date(data[i].Date);
        if(date > st && date < ed)
        {
            var date=data[i];
            document.querySelector('.demo').insertAdjacentHTML('afterbegin',
            `<div class="box">
            <h3>
            <img src=${data[i].img} style="width: 100px;height:100px;border-radius: 50px;">
            <span> ${data[i].Name} </span>
            </h3>
            <table style="margin-top:60px;">
            <tr>
            <th style="padding-left: 45px;">Likes </th>
            <th style="padding-left: 45px;">Tweets</th>
            <th style="padding-left: 45px;"> Share</th>
            </tr>
            <tr>
            <td style="padding-left: 45px;"> ${data[i].likes}</td>
            <td style="padding-left: 45px;"> ${data[i].Tweets}</td>
            <td style="padding-left: 45px;"> ${data[i].Shares} </td>

            </tr>
            </table>
            <br>
            <label> Posted On:</label>
            <span > ${data[i].Date} </span>
            </div>`);

        }
    }
});

