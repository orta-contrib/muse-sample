// Prepare the schema for data.
const schema = [
    {
      name: 'Name',
      type: 'dimension'
    },
    {
      name: 'Maker',
      type: 'dimension'
    },
    {
      name: 'Horsepower',
      type: 'measure',
      defAggFn: 'max'
    },
    {
      name: 'Origin',
      type: 'dimension'
    }
  ]

  // Prepare the data.
const data = [
    {
     "Name": "chevrolet chevelle malibu",
     "Maker": "chevrolet",
     "Horsepower": 130,
     "Origin": "USA"
   },
   {
     "Name": "buick skylark 320",
     "Maker": "buick",
     "Horsepower": 165,
     "Origin": "USA"
   },
   {
     "Name": "datsun pl510",
     "Maker": "datsun",
     "Horsepower": 88,
     "Origin": "Japan"
   }
 ]


const muze = window.muze;

async function myAsyncFn() {
    const DataModel = await muze.DataModel.onReady();
    const formattedData = await DataModel.loadData(data, schema);

    let dm = new DataModel(formattedData);

    const env = await muze();
    const canvas = env.canvas();

    canvas.layers([{
        mark: 'line'
    }]);
    canvas
        .data(dm)
        .rows(["Horsepower"])
        .columns(["Name"])
        .mount("#chart");
}

myAsyncFn()
    .catch(console.error.bind(console));