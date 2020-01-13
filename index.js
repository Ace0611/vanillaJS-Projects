const product = document.querySelector(".container");
const featuresDiv = document.querySelector(".features");
const ul = document.querySelectorAll(".details");
const featTitle = document.querySelectorAll(".feature-title");

async function handleClick() {
  let response = await fetch("https://flipkart-mock-product.now.sh/");
  let data = await response.json();
  const { products } = data;
  const { featuresList, compareSummary } = products;
  console.log(featuresList);
  featuresList.map((featuresObj, index) => {
    featTitle[index].innerText = featuresObj.title;
    featuresObj.features.map(feature => {
      console.log(feature);
      const li = document.createElement("li");
      li.innerText = feature.featureName;
      ul[index].appendChild(li);
    });
  });
}

product.addEventListener("click", handleClick);
