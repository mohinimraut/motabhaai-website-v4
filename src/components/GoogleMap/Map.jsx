import React,{useState,useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from "./LocationPin";
import './map.css'
import mapStyles from "./mapStyles";

const Map = ({shops, zoomLevel }) => {
    const [type, setType] = useState(shops[0].type);

        const typeArray = [
            'dairy',
            'kiranas',
            'bakery',
            'toys',
            'cosmetic',
            'giftshop',
            'electrical',
            'hardware',
            'groceries'
        ]
        setTimeout(() => {
            //TODO: make it serial
            const value = typeArray[Math.floor(Math.random() * (typeArray.length))]
            console.log("VALUES : ", value)
            setType(value)
        }, 2000000)


    function selectShop(type) {
        console.log("--element---")

        typeArray.forEach(item => {
            const element = document.getElementById(item);
            const elementNumber = document.getElementById(`${item}-number`);
            element.style.background = "none";
            elementNumber.style.background = "none";
        })

        const element = document.getElementById(type);
        const elementNumber = document.getElementById(`${type}-number`);
        element.style.background = "#1A2637";
        elementNumber.style.background = "#1A2637";

            setType(type)
        }

        const defaultProps = {
            
        center: {
            lat: 19.28714,
            lng: 72.86884
        },
        zoom: 15
    };
    const options={
      styles:mapStyles,
      disableDefaultUI: true,
      draggable: true,
      keyboardShortcuts: false,
      scaleControl: true,
      scrollwheel: true,
  };
 
   
    return (
        <div className="map" style={{backgroundColor:"#2C3D6333",overflow:"hidden"}}>
<div id="motabahiheadtitle">
<div class="row">  <p id="mapmotabhaai" style={{color:"#2C3D63"}}>Motabhaai's</p> </div>
 <div class="row"><p id="mapmotabhaaisecond" style={{color:"#2C3D63"}}>of Mira Bhayander</p></div>
 <div class="row"> <p id="mapmotabhaaithird" style={{color:"#2C3D63"}}>The good, The best and the superstar!</p> </div>
</div>

            <div className="google-map" style={{borderRadius:"30px",overflow:"hidden"}}>
                <GoogleMapReact
                    // bootstrapURLKeys={{key:"process.env.GOOGLE_API_KEY"}}
                    bootstrapURLKeys={{key:'AIzaSyDcxe_iN11f0cp88emtxk7RH0U-DfJx5BM'}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    options={{options}}
                >

   


                   
{shops.map(item => {
    // console.log("statetypeconsole======",item.type)
    // console.log("state............x",type)
    if(item.type===type){
        return (
            <LocationPin
                lat={item.lat}
                lng = {item.lng}
                text = {item.text}
                type={item.type}
                name={item.name}
            />
        )

    }
	
    
})}

<table style={{backgroundColor:"#556577",opacity:'2'}}  id="maptableweb">
  <thead>
    <tr style={{height:"2rem"}}>
      <th style={{color:"#fff"}} class="tdf" scope="col">Type</th>
      <th style={{color:"#fff"}} class="tds" scope="col">No of shop</th>
    </tr>
  </thead>
  <tbody>

  

    <tr class="tdwebrow">
   
    <td id="dairy" style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('dairy')} key={'dairy'}>Dairy</td>
      <td id="dairy-number" style={{color:"#FFFFFF"}} class="tds">34</td>
     
    </tr>
    <tr class="tdwebrow">
  
      <td id="kiranas" style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('kiranas')} key={'kiranas'}>Kiranas</td>
      <td id="kiranas-number" style={{color:"#FFFFFF"}} class="tds">04</td>
     
    </tr>
    <tr class="tdwebrow">
     
      <td id="bakery" style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('bakery')} key={'bakery'} >Bakery</td>
      <td id="bakery-number" style={{color:"#FFFFFF"}} class="tds">12</td>
     </tr>
     <tr class="tdwebrow">
      <td  id="toys" style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('toys')} key={'toys'}>Toys</td>
      <td id="toys-number " style={{color:"#FFFFFF"}} class="tds">05</td>
</tr>
<tr class="tdwebrow">
      <td id="cosmetic" style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('cosmetic')} key={'cosmetic'}>Cosmetic</td>
      <td  id="cosmetic-number" style={{color:"#FFFFFF"}} class="tds">08</td>
</tr>
<tr class="tdwebrow">
      <td id="giftshop"  style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('giftshop')} key={'giftshop'}>Gift Shop</td>
      <td id="giftshop-number"  style={{color:"#FFFFFF"}} class="tds">20</td>
</tr>
<tr class="tdwebrow">
      <td id="electrical"  style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('electrical')} key={'electrical'}>Electrical</td>
      <td id="electrical-number"  style={{color:"#FFFFFF"}} class="tds">25</td>
     </tr> 
     <tr class="tdwebrow">
      <td id="hardware"  style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('hardware')} key={'hardware'}>Hardware</td>
      <td id="hardware-number"  style={{color:"#FFFFFF"}} class="tds">27</td>
</tr>
<tr class="tdwebrow">
      <td id="groceries"  style={{color:"#FFFFFF"}} class="tdf" onClick={() => selectShop('groceries')} key={'groceries'}>Groceries</td>
      <td id="groceries-number"  style={{color:"#FFFFFF"}} class="tds">13</td>
    </tr>
  </tbody>
</table>



                </GoogleMapReact>
              
            </div>
            
<div className="row">
  <div className="col-sm">
    
  <table class="table" id="maptablemob"style={{}}>
  <thead>
    <tr style={{}}>
   
      <th className="tdmodulehead" scope="col">Type</th>
      <th id="mobshop" className="tdmodulehead" scope="col">No of shop</th>
     
    </tr>
  </thead>
  <tbody>
  
 
    <tr>
    <td id="dairy" className="tdmodule" onClick={() => selectShop('dairy')} key={'dairy'}>Dairy</td>
      <td id="dairy-number" className="tdmodule">34</td>
    </tr>
    <tr>
  
      <td id="kiranas" className="tdmodule" onClick={() => selectShop('kiranas')} key={'kiranas'}>Kiranas</td>
      <td id="kiranas-number" className="tdmodule">04</td>
     
    </tr>
    <tr>
     
      <td id="bakery" className="tdmodule" onClick={() => selectShop('bakery')} key={'bakery'} >Bakery</td>
      <td id="bakery-number" className="tdmodule">12</td>
     </tr>
     <tr>
      <td id="toys" className="tdmodule" onClick={() => selectShop('toys')} key={'toys'}>Toys</td>
      <td id="toys-number" className="tdmodule">05</td>
</tr>
<tr>
      <td  id="cosmetic" className="tdmodule" onClick={() => selectShop('cosmetic')} key={'cosmetic'}>Cosmetic</td>
      <td  id="cosmetic-number" className="tdmodule">08</td>
</tr>
<tr>
      <td id="giftshop" className="tdmodule" onClick={() => selectShop('giftshop')} key={'giftshop'}>Gift Shop</td>
      <td id="giftshop-number" className="tdmodule">20</td>
</tr>
<tr>
      <td id="electrical" className="tdmodule" onClick={() => selectShop('electrical')} key={'electrical'}>Electrical</td>
      <td id="electrical-number" className="tdmodule">25</td>
     </tr> 
     <tr>
      <td id="hardware" className="tdmodule" onClick={() => selectShop('hardware')} key={'hardware'}>Hardware</td>
      <td id="hardware-number" className="tdmodule">27</td>
</tr>
<tr>
      <td id="groceries" className="tdmodule" onClick={() => selectShop('groceries')} key={'groceries'}>Groceries</td>
      <td id="groceries-number" className="tdmodule">13</td>
    </tr>
  </tbody>
</table>
  </div>
</div>
        </div>
    )
}

export default Map;
