export async function sendNotification(payload: {
    type: "contact" | "quote";
    data: any;
  }) {
    const { type, data } = payload;
  
    switch (type) {
      case "contact":
        console.log("[CONTACT]", data);
        break;
  
      case "quote":
        console.log("[QUOTE REQUEST]", data);
        break;
  
      default:
        console.log("[UNKNOWN NOTIFICATION]", data);
    }
  
    // Ici tu branches :
    // - email admin
    // - discord
    // - telegram
  }