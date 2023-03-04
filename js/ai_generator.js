function generate_business_text() {

  //const MY_KEY = process.env.API_KEY;
  //console.log(MY_KEY);
    
  const ai_prompt = "Write a random sentence in the first person that describe the typical reasons why a business owner might be looking for web design services";

  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: ai_prompt,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
  })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.choices[0].text)
    document.getElementById("business-text").innerHTML = (data.choices[0].text)
  })
  .catch(error => console.error(error));
}

function generate_nonprofit_text() {

  //const MY_KEY = process.env.API_KEY;
  //console.log(MY_KEY);
    
  const ai_prompt = "Write a random sentence in the first person that describe the typical reasons why a non-profit organization might be looking for web design services";
  
  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: ai_prompt,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    })
  })
  .then(response => response.json())
  .then(data => {
      console.log(data.choices[0].text)
      document.getElementById("nonprofit-text").innerHTML = (data.choices[0].text)
  })
  .catch(error => console.error(error));
}