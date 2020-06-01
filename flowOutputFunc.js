msg.payload.text = "";

if(msg.payload.context.webhook_result_1)
{
	msg.payload = "Bot: " + msg.payload.context.webhook_result_1.results[0].text
}

else
	msg.payload = "Bot: " + msg.payload.output.text[0];

return msg;