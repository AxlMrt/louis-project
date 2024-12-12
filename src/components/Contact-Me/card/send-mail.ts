import ContactMeFormData from "@/types/ContactMeFormType";
import path from "path";

export async function sendEmail(data: ContactMeFormData) {
  const apiEndpoint = path.join(process.cwd(), `../../../api/email`);

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Failed to send email");

    const responseData = await response.json();
    alert(responseData.message);
  } catch (error) {
    console.error("Error sending email:", error);
    alert("An error occurred while sending the email. Please try again later.");
  }
}
