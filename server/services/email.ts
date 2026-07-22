export async function sendAutoReply(payload: {
    type: "contact" | "quote";
    email: string;
    name: string;
  }) {
    console.log(`[AUTO REPLY ${payload.type}]`, payload.email);
  
    if (payload.type === "contact") {
      // email contact
    }
  
    if (payload.type === "quote") {
      // email devis
    }
  }