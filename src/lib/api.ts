export type Data = {
    name: string
    email: string
    subject: string
    message: string
  }

export const sendContactForm = async (data: Data) => fetch('/api/contact', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})