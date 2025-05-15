import { CDN_URL } from "../../utils/constants";


const ItemList = ({items}) => {
   
  return (
        <div>

            {items && items.map((item) => (
                <div key={item.card.info.id} className="bg-black-50 shadow-lg border-b-2 p-2 m-2 text-left flex justify-between">
                  <div className="w-9/12">
                    <div className="py-2 ">
                        
                            <span className="font-bold text-lg ">{item.card.info.name}</span>
                            
                            <span>- ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice/100}</span>
                           
                        </div>
                        <div>
                             <p className="text-xs">{item.card.info.description}</p> 
                         </div>

                         <div className="w-3/12  p-4">
                         <div className="absolute">
                            <button className="p-2 bg-black shadow-lg  text-white mx-16 rounded-lg">Add +</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
                            
                         </div> 
                         </div>
                        
                    </div>
               
            ) )}
        </div>

    
    );

}



export default ItemList;