@cmessages.each do |cmessage| 
    json.set! cmessage.id do 
        json.id cmessage.id
        json.body cmessage.body
        json.author cmessage.author_id
        json.created_at cmessage.created_at
    end
end