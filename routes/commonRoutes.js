const route = require('express').Router();

let fs = require('fs');


route.get('/register', function (req, res) {
    res.render('../view/reg.html');
})

route.post('/register/save', function (req, res) {
    let rname = req.body.name;
    let pass = req.body.password;
    let c = 0;
    console.log('****registered****');
    let user = [];
    fs.readFile('./model/record22.json', function (err, data) {
        if (err) {
            console.log('Error');
        } else {
            user = JSON.parse(data);
            for (i in user) {
                if (rname == user[i].uname) {
                    res.send('user allredy exist');
                    c++;
                }
            }
        }
        if (c == 0) {
            user.push({ uname: rname, upass: pass });
            juser = JSON.stringify(user);
            fs.writeFile('./model/record22.json', juser, function (err) {
                if (err) {
                    console.log('Error');
                } else {
                    res.render('../view/login.html',);
                }
            })
        }

    })
})

route.get('/', function (req, res) {
    res.render('../view/login.html');
})

route.post("/login", function (req, res) {
    let name = req.body.name;
    let pass = req.body.pass;
    fs.readFile('./model/record22.json', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            var user = [];
            user = JSON.parse(data);
            var c=0;
            for (i in user) {

            if(name==user[i].uname && pass==user[i].upass) {

                c++;


            }
              }
        
            if (c==0) {
                res.send("UserName and Password Does Not Match");
            }
            else {

                fs.readFile('./model/record.json', 'utf-8', function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        user = JSON.parse(data);
                        res.render('../view/text.html', { juser: user })
                    }
                });


            }
        }
    });
});


route.get('/add', function (req, res) {
    res.render('../view/add.html');
})


route.post('/submit', function (req, res) {
    let name = req.body.name;
    let age = req.body.age;
    let mob = req.body.mob;
    let add = req.body.add;
    console.log(name);
    console.log(age);
    console.log(mob);
    console.log(add);
    let user = [];

    // user.push({ name: name, age: age });
    // let juser = JSON.stringify(user);

    fs.readFile('./model/record.json', function (err, data) {
        if (err) {

        } else {
            user = JSON.parse(data);
            user.push({ name: name, age: age, mob: mob, add: add });
            let juser = JSON.stringify(user);
            fs.writeFile('./model/record.json', juser, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.render('../view/text.html', { juser: user });
                }
            })
        }
    })
})


route.get('/submit/delete', function (req, res) {
    const a = req.query.name;
    console.log(a);
    fs.readFile('./model/record.json', function (err, data) {
        if (err) {
            console.log('Error');
        } else {
            user = JSON.parse(data);
            user.splice(a, 1);
            juser = (JSON.stringify(user));
            console.log("********ok*********" + user)
            fs.writeFile('./model/record.json', juser, function (err) {
                if (err) {
                    console.log('Error');
                } else {
                    res.render('../view/text.html', { juser: user });
                }
            })
        }
    })
})

route.get('/submit/modify', function (req, res) {
    const a = req.query.name;
    console.log(a);
    fs.readFile('./model/record.json', function (err, data) {
        if (err) {
            console.log('Error');
        } else {
            user = JSON.parse(data);
            let mname = user[a].name;
            let mage = user[a].age;
            let mmob = user[a].mob;
            let madd = user[a].add;
            console.log('*******modify*******', user[a].name);
            res.render('../view/update.html', { mname, mage, mmob,madd, a });
        }
    })
})


route.post('/submit/modify/save', function (req, res) {
    const name = req.body.name;
    const age = req.body.age;
    const mob = req.body.mob;
    const add = req.body.add;
    const a = req.body.a;
    console.log(a);
    fs.readFile('./model/record.json', function (err, data) {
        if (err) {
            console.log("Error");

        } else {
            user = JSON.parse(data);
            user.splice(a, 1, { name: name, age: age ,mob:mob, add: add});
            juser = JSON.stringify(user);
            console.log('***done*****', +user)
            fs.writeFile('./model/record.json', juser, function (err) {
                if (err) {
                    console.log('Error');
                } else {
                    res.render('../view/text.html', { juser: user });
                }
            })
        }
    })
})
module.exports = route;
