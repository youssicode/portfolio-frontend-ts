import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"

type ContactDataType = {
  name: string
  email: string
  message: string
}

const sendNotificationEmail = async ({
  name,
  email,
  message,
}: ContactDataType): Promise<EmailJSResponseStatus> => {
  const templateData = {
    from_name: name,
    from_email: email,
    message,
  }
  const response: EmailJSResponseStatus = await emailjs.send(
    "service_0vxw8au",
    "PortfolioContact_d16pcv9",
    templateData,
    "JDGI8mjXL1lOtTMEA"
  )

  return response
}

export default sendNotificationEmail
