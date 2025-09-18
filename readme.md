
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans: 1.To get id use getElementById
    2.To get class name use getElementsByClassName
    3.querySelector Returns the first Element within the document that matches the specified CSS selector or group of selectors.
    4.querySelectorAll Returns a static NodeList containing all Element objects within the document that match the specified CSS selector or group of selector

2. How do you **create and insert a new element into the DOM**?
ans:First use document.creatElement() to create new element
secondly set some attributes or innerHTML to the new element
lastly find the parent node then append the new element to the parent node

3. What is **Event Bubbling** and how does it work?
ans: Event bubbling is a mechanism where if an event is triggered on an element ,the event will go towards the parents of the triggered element .suppose an element is clicked then the event will go to its parent node ,if the current parent has another parent then the event will trigger that also.

4. What is **Event Delegation** in JavaScript? Why is it useful?
ans: In this technique we use single event listener on a parent element to manage events for multiple child elements.
We use event.target property to identify specific child element the event originated from.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
ans: preventDefault()- This method  stops the browsers default behavior which is associated with a specific event from happenig
stopPropagation()-

---

