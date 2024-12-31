// Customize widget settings
const widgetSettings = {
    widgetId: "GPuVNh8QA5r03heB6Q_wrMENFAl9L-rqzXjzv_2HgdA	", // Replace with your widget ID
    baseUrl: "https://kubernetesguru-backend-staging-api.getanteon.com",
    text: "Ask AI", // Optional - Button text
    margins: { bottom: "20px", right: "20px" }, // Optional - Widget positioning
    lightMode: false // Optional - Force light mode
  };
  
  // Load the GuruBase widget
  const guruScript = document.createElement("script");
  guruScript.src = "https://widget.gurubase.io/widget.latest.min.js";
  guruScript.defer = true;
  guruScript.id = "guru-widget-id";
  
  // Add widget settings as data attributes
  Object.entries({
    "data-widget-id": widgetSettings.widgetId,
    "data-baseUrl": widgetSettings.baseUrl,
    "data-text": widgetSettings.text,
    "data-margins": JSON.stringify(widgetSettings.margins),
    "data-light-mode": widgetSettings.lightMode
  }).forEach(([key, value]) => {
    guruScript.setAttribute(key, value);
  });
  
  // Append the script to the document
  document.body.appendChild(guruScript);