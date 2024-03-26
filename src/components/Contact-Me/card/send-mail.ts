import ContactMeFormData from "@/types/ContactMeFormType";

export async function sendEmail(data: ContactMeFormData) {
  const apiEndpoint = "/api/email";

  await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
