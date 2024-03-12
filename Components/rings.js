AFRAME.registerComponent("create-rings",{
    init:function(){
        for(var i=1;i<100;i++){
            var id=`ring${i}`

            var posX=Math.random()*3000 + -1000
            var posY=Math.random()*2 + -1;  
            var posZ=Math.random()*3000 + -1000

            var position={x:posX,y:posY,z:posZ}
            this.createRings(id,position)
        }

    },
    createRings:function(id,position){
        var terrain=document.querySelector("#T")
        var ring=document.createElement("a-entity")

        ring.setAttribute("id",id)
        ring.setAttribute("position",position)
        ring.setAttribute("geometry",{
            primitive:"torus",
            radius:12
        })
        ring.setAttribute("material",{
            color:"#ff9999"
        })

        terrain.appendChild(ring)

    }
})