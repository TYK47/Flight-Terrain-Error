AFRAME.registerComponent("terrain-rotation",{
schema:{
    speedOfRotation:{type:"number",default:0}
},
init:function(){
    this.data.speedOfRotation= this.el.getAttribute("rotation")
    // x=0, y=0, z=0
    var planeR= this.data.speedOfRotation
    window.addEventListener("keydown", (e)=>{
        //console.log(e)
        if(e.key == "d"){
            if(planeR.y < 30){
                planeR.y+=0.1
                this.el.setAttribute("rotation",planeR)
            }
        }
        if(e.key == "a"){
            if(planeR.y > -30){
                planeR.y-=0.1
                this.el.setAttribute("rotation",planeR)
            }
        }
    })
}
})