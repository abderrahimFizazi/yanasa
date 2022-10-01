function getBotResponse(input) {
        if (input == "hello" || input == "hi" || input == "Hello" || input == "Hi" || input == "hii" || input == "Hii") {
            return "Hello there!";
        } else if (input == "fine" || input == "nice" || input == "Good" || input == "Fine" || input == "Nice" || input == "Good") {
            return "Glad to hear this!";
        } else if (input == "goodbye" || input == "Goodbye" || input == "good bye" || input == "Good bye") {
            return "Talk to you later!"
        } else if (input == "what is your name" || input == "what is your name?" || input == "What your name" || input == "What your name?") {
            return "YANASA ChatBot!";
        } else if (input == "YANASA Services" || input == "Yanasa services?" || input == "services" || input == "Services?") {
            return "Data Visualisation, Simulations, Interactives Maps, Training; YANASA Product";
        } else if (input == "YANASA" || input == "yanasa" || input == "What is YANASA?") {
            return "YANASA is a platform that helps not only global policy frameworks but also everyone that is interested in earth science and the planet, whether he is a beginner or a professional.";
        } else if (input == "YANASA Product" || input == "Yanasa product?" || input == "product" || input == "Product?") {
            return "We developed a physical visualizator (using a lot of sensors and different electronic components) that helps you understand the earth observations data besides you have control to change some parameters to see what can happen in real life.";
        } else if (input == "who developed this website" || input == "who developed this website?" || input == "Who developed this platform" || input == "Who developed this ?") {
            return "EO Challengers!";
        } else if (input == "Methane" || input == "methane") {
            return "Methane is a colorless gas that has no smell, and has a lot of effect on our planet, it can be released from sources like cows, agriculture, natural gas drilling, and waste. So Cutting methane emissions will be the fastest opportunity we have to immediately slow the rate of global warming!!";
        } else if (input == "Carbon dioxide" || input == "CO2" || input == "carbon dioxide") {
            return "Carbon is in carbon dioxide, which is a greenhouse gas that works to trap heat close to Earth. It helps Earth hold the energy it receives from the Sun so it doesn’t all escape back into space. If it weren’t for carbon dioxide, Earth’s ocean would be frozen solid.";
        } else if (input == "Deforestation" || input == "deforestation") {
            return "Deforestation refers to the decrease in forest areas across the world that are lost for other uses such as agricultural croplands, urbanization, or mining activities. Greatly accelerated by human activities since 1960, deforestation has been negatively affecting natural ecosystems, biodiversity, and the climate.";
        } else if (input == "Climate Change" || input == "climate change" || input == "Climate change") {
            return "Climate change describes a change in the average conditions — such as temperature and rainfall — in a region over a long period of time. NASA scientists have observed Earth’s surface is warming, and many of the warmest years on record have happened in the past 20 years.";
        } else if (input == "greenhouse" || input == "Greenhouse" || input == "Greenhouse effect" || input == "Greenhouse Effect") {
            return "The greenhouse effect is a process that occurs when gases in Earth's atmosphere trap the Sun's heat. This process makes Earth much warmer than it would be without an atmosphere. The greenhouse effect is one of the things that makes Earth a comfortable place to live."
        } else if (input == "air pollution" || input == "Air Pollution" || input == "Air pollution") {
            return "Air pollution is the contamination of the indoor or outdoor environment by any chemical, physical or biological agent that modifies the natural characteristics of the atmosphere.";
        } else if (input == "Land Management" || input == "land management" || input == "Land management") {
            return "Land management is the process of managing the use and development (in both urban and rural settings) of land resources.";
        } else if (input == "Beginner" || input == "beginner" || input == "Beginners" || input == "beginners" || input == "I am beginner" || input == "I'm Beginner") {
            return "Welcome to Yanasa, we have some basic resources for you and some cool data visualizations can help you better understand the earth observations parameters, check this!";
        } else if (input == "Advanced" || input == "advanced" || input == "I'm advanced" || input == "I am advanced") {
            return "Welcome to Yanasa, we have resources, training, and articles to help better understand the effect of earth observations parameters, check this!";
        } else {
            return "Try to ask something else!";
        }
    }