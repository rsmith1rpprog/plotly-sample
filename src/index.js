import datas from "./data";

// var data = [
//   {
//     x: ["giraffes", "orangutans", "monkeys"],
//     y: [20, 14, 23],
//     type: "bar"
//   }
// ];

// datas[0].y.map((values, index) => {
//   datas[0].y[index] = values * -1;
// });
let top = -150;
let tickvalY = [];
let dataY = [];

datas[0].y.map((values, index) => {
  tickvalY.push(String(values - top));
  dataY.push(values * -1);
});

console.log("---", dataY);
console.log("---", tickvalY);

var data = datas;

var layout = {
  // yaxis: {
  //   tickvals: [20, 14, 23],
  //   ticktext: [
  //     "giraffesss",
  //     '<span style="fill:green">orangutanssttts</span>',
  //     "monkeys"
  //   ]
  //   //tickfont: { size: 16 }
  // },

  yaxis: {
    //tickvals: dataY,
    tickvals: [34, 34, 34, 34],
    //ticktext: tickvalY,
    ticktext: ["dsaf", "dsf", "asdf", "sdfa"],
    //type: "category",
    tickfont: { size: 10 }
  },

  xaxis: {
    type: "category"
  },
  title: "Scanner"
};

let graph = document.getElementById("graph");

Plotly.newPlot(graph, data, layout);
