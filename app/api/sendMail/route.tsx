import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.SMTP_EMAIL,
		pass: process.env.SMTP_PASSWORD,
	},
});

export const POST = async (request: Request) => {
	const body = await request.json();

	const mailData = {
		from: process.env.SMTP_EMAIL,
		to: process.env.SMTP_EMAIL,
		subject: `AL MADENA TECHNICAL | New Message from ${body.name}`,
		html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="background-color: #4CAF50; color: white; padding: 10px 15px; border-radius: 5px; text-align: center;">
            New Message from ${body.name}
        </h2>

        <p style="font-size: 16px;">
            <strong>Name:</strong> ${body.name} <br/>
            <strong>Email:</strong> ${body.email} <br/>
            <strong>Phone:</strong> ${body.phone ? body.phone : "Not provided"} <br/>
        </p>

        <div style="margin-top: 20px;">
            <h3 style="color: #4CAF50;">Message:</h3>
            <p style="font-size: 16px; background-color: #f9f9f9; padding: 15px; border: 1px solid #eee; border-radius: 5px;">
                ${body.message.replace(/\n/g, "<br/>")}
            </p>
        </div>

        <p style="margin-top: 20px; font-size: 14px; color: #888; text-align: center;">
            This message was sent from the AL MADENA LANDSCAPE website contact form.
        </p>

        <footer style="margin-top: 20px; text-align: center; font-size: 12px; color: #666;">
            &copy; ${new Date().getFullYear()} AL MADENA LANDSCAPE. All Rights Reserved.
        </footer>
    </div>
    `,
	};

	try {
		await transporter.sendMail(mailData);
		return new Response("Email sent", { status: 200 });
	} catch (error: any) {
		return new Response(error.toString(), { status: 500 });
	}
};
