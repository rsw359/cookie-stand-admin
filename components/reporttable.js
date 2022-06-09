import { openHours } from "../data";

export default function ReportTable( {stores} ) {

  function totalHourlySales(stores){
    let totalSales = [];
    for (let i = 0; i < openHours.length; i++){
      let sales= 0;
      stores.map(item => {
        sales += item.hourlySales[i]
      })
      
      totalSales[i]= sales
    }
    return (totalSales)
  }

  function getTotal(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
      total +=  arr[i]     
    }
    
    return total
  }
  let grandTotal = getTotal(totalHourlySales(stores))

  if (stores.length == 0) {

    return (
        <h2 className="w-1/2 mx-auto my-8 text-4xl text-center">
            No Stores :(
        </h2>
    );

    } else {

    return (
        <table className="w-1/2 mx-auto my-4 border">
            <thead>
                <tr className="bg-emerald-500">
                    <th className="rounded-tl-lg">Location</th>
                    {openHours.map(item => (
                     <th key={item}>{item}</th> 
                    ))}                   
                    <th className="rounded-tr-lg">Total</th>           
                </tr>
            </thead>
            <tbody >
                {stores.map((item,index) => (
                    <tr className="even:bg-emerald-300 odd:bg-emerald-500" key={index}>
                        <td className="p-2 border border-black ">{item.Location}</td>

                        {item.hourlySales.map((int, index) => (
                          <td key={index} className="p-2 border border-black ">{int}</td>           
                        ))}
                        <td className="p-3 border border-black ">{item.total}</td>

                    </tr>
                ))}       
            
            </tbody>
            <tfoot>
            <th className="p-2 font-bold border border-black bg-emerald-600">Totals</th>
            {totalHourlySales(stores).map((item, idx) => (
              <th key={idx} className="p-2 border border-black bg-emerald-600">{item}</th>
              ))}
              <th className="p-2 border border-black bg-emerald-600">{grandTotal}</th>
        </tfoot>
        </table>
    );
  }

}