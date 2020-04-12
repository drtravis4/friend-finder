var express = require("express")
var port = process.env.PORT || 8000
var app = express()
app.use (express.static("app/public"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
var apiRoutes = require("./app/routing/apiRoutes")
apiRoutes(app)
var htmlRoutes = require("./app/routing/htmlRoutes")
htmlRoutes(app)
app.listen(port, function(){
    console.log("app is listening on http://localhost:" + port)
})



 