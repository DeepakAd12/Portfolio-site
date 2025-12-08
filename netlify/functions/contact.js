const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body);
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields: name, email, message' })
      };
    }

    // Prepare email to portfolio owner
    const recipientEmail = process.env.CONTACT_RECIPIENT || process.env.SENDGRID_FROM_EMAIL || 'adhikarideepak719@gmail.com';
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'no-reply@example.com';

    const msg = {
      to: recipientEmail,
      from: fromEmail,
      subject: `New Contact Submission from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send email via SendGrid
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        message: 'Contact form received and email sent successfully'
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to process contact form',
        details: error.message
      })
    };
  }
};
