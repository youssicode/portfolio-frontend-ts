import emailjs from "@emailjs/browser"

const sendNotificationEmail = (contactData) => {
  const templateData = {
    from_name: contactData.name,
    from_email: contactData.email,
    message: contactData.message,
  }

  emailjs
    .send(
      "service_0vxw8au",
      "PortfolioContact_d16pcv9",
      templateData,
      "JDGI8mjXL1lOtTMEA"
    )
    .then((response) => {
      console.log("Email sent successfully:", response)
      // Handle success (e.g., show a success message to the user)
    })
    .catch((error) => {
      console.error("Error sending email:", error)
      // Handle error (e.g., show an error message to the user)
    })
}

export default sendNotificationEmail
