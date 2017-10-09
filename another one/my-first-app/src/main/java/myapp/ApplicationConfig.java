package myapp;

import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.jaxrs.json.JacksonJsonProvider;
import org.apache.cxf.validation.BeanValidationProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

/**
 * Created by vkumar1 on 10/4/17.
 */

@Configuration
public class ApplicationConfig {
    @Bean
    public LocalValidatorFactoryBean validator() {
        return new LocalValidatorFactoryBean();
    }

    @Bean
    public BeanValidationProvider validationProvider() {
        return new BeanValidationProvider(validator());
    }

    @Bean
    public JacksonJsonProvider jsonProvider() {
        JacksonJsonProvider jsonProvider = new JacksonJsonProvider();

        jsonProvider.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

        return jsonProvider;
    }
}
