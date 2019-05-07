const api_key='ba52f9b8c9a046d5ae692dcc07e33b8b';


export function formatDate(date) {
    let date1 = new Date(date);
    let year = date1.getFullYear().toString();
    let month = (date1.getMonth() + 101).toString().substring(1);
    let day = (date1.getDate() + 100).toString().substring(1);
    return year + "-" + month + "-" + day;
}

let key=0;

export const ChangeCurrency_api = async (date,name) => {
  let choice=search_option;
  //console.log("get_movieget_movieget_movieget_movieget_movieget_movie")
  const response = await fetch(`https://openexchangerates.org/api/historical/${date}.json?app_id=${api_key}&symbols=${name}`)

  const {Response,Search} = await response.json()
    if (Response==='True') {
        return {Search,Response}
    }
    return {Response}// when no data found

}

export const ChangeCurrencyMonthly_api = async (date,name) => {
    let arry=[];
    //console.log("get_movieget_movieget_movieget_movieget_movieget_movie")
    let date_target = new Date(date);
    let now = new Date();
    let arry_str=[];
    for (let i = 0; i < 30; i++) {
        let date_form = formatDate(date_target);
        let obj={[date_form]:`https://openexchangerates.org/api/historical/${date_form}.json?app_id=${api_key}&symbols=${name}`}
        arry_str.push( obj)
        date_target.setDate(date_target.getDate() - 1)
    }
    // Note that async functions return a promise
    const promises = arry_str.map(async (item) => {
        let key=Object.keys(item);
        console.log('key'+key)
        let value=Object.values(item);
        console.log('value'+value)
        const response = await fetch(`${value}`)
        const {rates} = await  response.json();
        if (rates===undefined) {
            i--;
            return;
        }
        // Log individual results as they finish
        let target_object = {'key':key[0],'value':(1/rates[name]).toFixed(4),'per':''};
        return target_object;
    });

    let now2 = new Date();
    console.log(now2-now)

    const results = await Promise.all(promises);
    console.log(results)
    return  results;
}

export const convert_result_api = async (date,from,to) => {

    let date_form=formatDate(date);
    const response = await fetch( `https://openexchangerates.org/api/historical/${date_form}.json?app_id=${api_key}&symbols=${from},${to}`)
    const {rates} = await response.json();
    return {rates}// when no data found
}

export const getccyname = async () => {
    const response = await fetch('https://openexchangerates.org/api/currencies.json')
    const data = await response.json();
    return data// when no data found
}









