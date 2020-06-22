import { JournalEntry } from './journal';
import './styles.css';



$(document).ready(function() {
  $("form#journalEntry").submit(function() {
    event.preventDefault();
    let title = $("input#title").val();
    let body = $("input#body").val();
    
    //$("#journalEntryOutput").text();
    //$("#journalEntryOutput").append("<p>" +  + "</p>");

    console.log(title);
    console.log(body);

    // let newEntry = new JournalEntry(title, body);

