package com.eatery.customClasses;

import java.io.IOException;
import org.joda.time.LocalDateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class CustomJsonDateDeserializer extends JsonDeserializer<LocalDateTime>
{

	@Override
	public LocalDateTime deserialize(JsonParser jsonparser,
			DeserializationContext arg1) throws IOException,
			JsonProcessingException {
		String datetime = jsonparser.getText();
		DateTimeFormatter formatter = DateTimeFormat.forPattern("MM/dd/yyyy HH:mm a");
		LocalDateTime localDateTime=new LocalDateTime(formatter.parseLocalDateTime(datetime));
		return localDateTime;
	}
   
}