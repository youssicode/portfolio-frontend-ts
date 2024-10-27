import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"

type ContactDataType = {
  name: string
  email: string
  message: string
}

const sendNotificationEmail = async (
  contactData: ContactDataType
): Promise<EmailJSResponseStatus> => {
  const { name, email, message } = contactData

  const templateData = {
    from_name: name,
    from_email: email,
    message,
  }

  try {
    const response: EmailJSResponseStatus = await emailjs.send(
      "service_0vxw8au",
      "PortfolioContact_d16pcv9",
      templateData,
      "JDGI8mjXL1lOtTMEA"
    )

    // TODO: Send success & error status to the backend (to store in the same user's entry)
    console.log("Email sent successfully:", response)
    return response
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

export default sendNotificationEmail
