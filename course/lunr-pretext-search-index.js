var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "course-details",
  "level": "1",
  "url": "course-details.html",
  "type": "Section",
  "number": "0.1",
  "title": "Course Details",
  "body": " Course Details    Course Calendar       Course Information  This is the course information Math 2413-TR02S for Spring 2027.    Instructor  Cory Wilson    Office & Email  SEM 2B6(B) | email here     Student Hours  See Moodle    Class Meets  TR 11:00pm - 12:15pm, 2C4        "
},
{
  "id": "sec-course-information-2",
  "level": "2",
  "url": "course-details.html#sec-course-information-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Math 2413-TR02S "
},
{
  "id": "fo1",
  "level": "1",
  "url": "fo1.html",
  "type": "Section",
  "number": "1.1",
  "title": "FO1: Solutions to Differential Equations",
  "body": " FO1: Solutions to Differential Equations     I can determine if a function or family of functions is a solution to a given differential equation, classify a differential equation as linear or nonlinear, and identify its order.      What Is a Differential Equation?   (Ordinary\/Partial) Differential Equation  differential equation (ordinary)  differential equation (partial)   A differential equation is an equation which relates a function to its derivatives. There are two kinds of differential equations: ordinary differential equations (ODEs) and partial differential equations (PDEs). In this course, we will restrict our focus to ordinary differential equations.      An example of an ordinary differential equation is the familiar which asks the question: \"What function y(x) has a derivative equal to 2x?\" The solution to this differential equation is the family of functions where C is an arbitrary constant. We can check that this is a solution by differentiating; , so we have have satisfied the condition stated by the differential equation.      Other examples of ordinary differential equations are         Below are examples of partial differential equations:  The wave equation:   The heat equation:       Testing Solutions to ODEs   Solution to a Differential Equation  differential equation (solution to)   A solution to a differential equation is a function which satisfies the rules imposed by the equation.      The family of functions are solutions to the differential equation because      Exponential Growth   The family is a solution to the differential equation for some constant because and . Setting , we have .  This differential equation models exponential growth . In reality, few things grow exponentially due to constraints in the environment. Despite its lack of realism, we can use the exponential growth equation to help build other, more useful models.      The acceleration of an object in free-fall is given by where is the gravitational constant. Find its position function, knowing that m and m\/s.  You likely would have encountered this kind of problem when learning integration\/antiderivatives; the solution requires integrating acceleration to find velocity and then using velocity to find position. First, we have Since , we have and . Next, we integrate again to find position: Since , we have and .      Show that the family is is a solution to the differential equation       For the differential equation Show that the families and are both solutions to the ODE. Is a solution as well?      Let , , and . Show that each of these functions is a solution to the differential equation What about ?     Principle of Superposition  principle of superposition   Linear combinations of solutions to a differential equation are also solutions to the same differential equation.      Classifying Differential Equations   Linear\/Nonlinear Differential Equations  differential equations (linear)  differential equations (nonlinear)   A differential equation is linear if it can be written in the form where the coefficients and depend only on the independent variable . Otherwise, the differential equation is nonlinear .     Order of a Differential Equation  differential equation (order)   The order of a differential equation is the order of the highest derivative in the equation.     (Non)Homogeneous Differential Equation  differential equation (homogeneous)  differential equation (nonhomogeneous)   A differential equation is homogeneous if all terms depend on the dependent variable, i.e. if no term is a function of the independent variable alone. Otherwise the equation is nonhomogeneous .     A homogeneous, linear ODE can always be put into the form      The equation has order 3, is linear, and homogeneous. However, is nonhomogeneous.      Determine the order, linearity status, and homogeneity status of the following ODEs:                      "
},
{
  "id": "fo1-2",
  "level": "2",
  "url": "fo1.html#fo1-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "   I can determine if a function or family of functions is a solution to a given differential equation, classify a differential equation as linear or nonlinear, and identify its order.    "
},
{
  "id": "def-ode-pde",
  "level": "2",
  "url": "fo1.html#def-ode-pde",
  "type": "Definition",
  "number": "1.1.1",
  "title": "(Ordinary\/Partial) Differential Equation.",
  "body": " (Ordinary\/Partial) Differential Equation  differential equation (ordinary)  differential equation (partial)   A differential equation is an equation which relates a function to its derivatives. There are two kinds of differential equations: ordinary differential equations (ODEs) and partial differential equations (PDEs). In this course, we will restrict our focus to ordinary differential equations.   "
},
{
  "id": "sec-ode-what-is-3",
  "level": "2",
  "url": "fo1.html#sec-ode-what-is-3",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  An example of an ordinary differential equation is the familiar which asks the question: \"What function y(x) has a derivative equal to 2x?\" The solution to this differential equation is the family of functions where C is an arbitrary constant. We can check that this is a solution by differentiating; , so we have have satisfied the condition stated by the differential equation.   "
},
{
  "id": "sec-ode-what-is-4",
  "level": "2",
  "url": "fo1.html#sec-ode-what-is-4",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  Other examples of ordinary differential equations are      "
},
{
  "id": "sec-ode-what-is-5",
  "level": "2",
  "url": "fo1.html#sec-ode-what-is-5",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  Below are examples of partial differential equations:  The wave equation:   The heat equation:    "
},
{
  "id": "def-solution-to-de",
  "level": "2",
  "url": "fo1.html#def-solution-to-de",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Solution to a Differential Equation.",
  "body": " Solution to a Differential Equation  differential equation (solution to)   A solution to a differential equation is a function which satisfies the rules imposed by the equation.   "
},
{
  "id": "sec-ode-solutions-to-3",
  "level": "2",
  "url": "fo1.html#sec-ode-solutions-to-3",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  The family of functions are solutions to the differential equation because    "
},
{
  "id": "exponential-growth-intro",
  "level": "2",
  "url": "fo1.html#exponential-growth-intro",
  "type": "Example",
  "number": "1.1.7",
  "title": "Exponential Growth.",
  "body": " Exponential Growth   The family is a solution to the differential equation for some constant because and . Setting , we have .  This differential equation models exponential growth . In reality, few things grow exponentially due to constraints in the environment. Despite its lack of realism, we can use the exponential growth equation to help build other, more useful models.   "
},
{
  "id": "sec-ode-solutions-to-5",
  "level": "2",
  "url": "fo1.html#sec-ode-solutions-to-5",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  The acceleration of an object in free-fall is given by where is the gravitational constant. Find its position function, knowing that m and m\/s.  You likely would have encountered this kind of problem when learning integration\/antiderivatives; the solution requires integrating acceleration to find velocity and then using velocity to find position. First, we have Since , we have and . Next, we integrate again to find position: Since , we have and .   "
},
{
  "id": "sec-ode-solutions-to-6",
  "level": "2",
  "url": "fo1.html#sec-ode-solutions-to-6",
  "type": "Checkpoint",
  "number": "1.1.9",
  "title": "",
  "body": "  Show that the family is is a solution to the differential equation    "
},
{
  "id": "sec-ode-solutions-to-7",
  "level": "2",
  "url": "fo1.html#sec-ode-solutions-to-7",
  "type": "Checkpoint",
  "number": "1.1.10",
  "title": "",
  "body": "  For the differential equation Show that the families and are both solutions to the ODE. Is a solution as well?   "
},
{
  "id": "sec-ode-solutions-to-8",
  "level": "2",
  "url": "fo1.html#sec-ode-solutions-to-8",
  "type": "Checkpoint",
  "number": "1.1.11",
  "title": "",
  "body": "  Let , , and . Show that each of these functions is a solution to the differential equation What about ?   "
},
{
  "id": "thm-linear-combinations-odes-solution",
  "level": "2",
  "url": "fo1.html#thm-linear-combinations-odes-solution",
  "type": "Theorem",
  "number": "1.1.12",
  "title": "Principle of Superposition.",
  "body": " Principle of Superposition  principle of superposition   Linear combinations of solutions to a differential equation are also solutions to the same differential equation.   "
},
{
  "id": "def-linear-nonlinear-odes",
  "level": "2",
  "url": "fo1.html#def-linear-nonlinear-odes",
  "type": "Definition",
  "number": "1.1.13",
  "title": "Linear\/Nonlinear Differential Equations.",
  "body": " Linear\/Nonlinear Differential Equations  differential equations (linear)  differential equations (nonlinear)   A differential equation is linear if it can be written in the form where the coefficients and depend only on the independent variable . Otherwise, the differential equation is nonlinear .   "
},
{
  "id": "def-order-ode",
  "level": "2",
  "url": "fo1.html#def-order-ode",
  "type": "Definition",
  "number": "1.1.14",
  "title": "Order of a Differential Equation.",
  "body": " Order of a Differential Equation  differential equation (order)   The order of a differential equation is the order of the highest derivative in the equation.   "
},
{
  "id": "def-homogeneous-nonhomogeneous-ode",
  "level": "2",
  "url": "fo1.html#def-homogeneous-nonhomogeneous-ode",
  "type": "Definition",
  "number": "1.1.15",
  "title": "(Non)Homogeneous Differential Equation.",
  "body": " (Non)Homogeneous Differential Equation  differential equation (homogeneous)  differential equation (nonhomogeneous)   A differential equation is homogeneous if all terms depend on the dependent variable, i.e. if no term is a function of the independent variable alone. Otherwise the equation is nonhomogeneous .   "
},
{
  "id": "sec-ode-classifying-5",
  "level": "2",
  "url": "fo1.html#sec-ode-classifying-5",
  "type": "Note",
  "number": "1.1.16",
  "title": "",
  "body": " A homogeneous, linear ODE can always be put into the form   "
},
{
  "id": "sec-ode-classifying-6",
  "level": "2",
  "url": "fo1.html#sec-ode-classifying-6",
  "type": "Example",
  "number": "1.1.17",
  "title": "",
  "body": "  The equation has order 3, is linear, and homogeneous. However, is nonhomogeneous.   "
},
{
  "id": "sec-ode-classifying-7",
  "level": "2",
  "url": "fo1.html#sec-ode-classifying-7",
  "type": "Checkpoint",
  "number": "1.1.18",
  "title": "",
  "body": "  Determine the order, linearity status, and homogeneity status of the following ODEs:                    "
},
{
  "id": "fo2",
  "level": "1",
  "url": "fo2.html",
  "type": "Section",
  "number": "1.2",
  "title": "FO2: Separation of Variables",
  "body": " FO2: Separation of Variables     I can determine when to use separation of variables to solve a first-order differential equation and appropriately apply the technique to find a solution.      Separation of Variables   Separable Differential Equation  separable differential equation  differential equation (separable)   A differential equation is said to be separable if it can be written in the form   Alternately, one can write a separable equation as where .      The equation is separable because we can write it as To solve it, we integrate both sides:       For the following ODEs, determine if it is separable. If it is, find the general solution. If it isn't, explain why.         with                    Applications of Separation of Variables   Exponential Growth\/Decay   Exponential growth, introduced in , is derived from a separable equation. We assume that growth of a population (bacteria, rabbits, etc.) is proportional to its population at time . Because growth describes a rate of change, we have Separation of variables shows that or If , we say that the population is experiencing growth; if , the population experiences decay.      The mean half-life of a prescription drug is 12.5 hours. Find the constant of proportionality for the drug.     Logistic Growth\/Decay   Exponential growth is not realistic for most population situations. Environmental constraints such as access to food, shelter, etc. will naturally limit the rate of population growth.  Let's make the assumption that the rate of change of population is positive until a certain value is reached; call that number . After the population reaches , the growth rate becomes negative (note: not the population , its growth rate). Based on these assumptions, we modify the exponential growth equation by multiplying by a function : What does look like? When is smaller than , we want to be close to 1; when , we want . After some experimentation, we might settle on . In particular, this tells us that when , there is zero population growth, which makes sense based on our assumptions.  Now we have which is a separable equation. You should check (this requires partial fraction decomposition, some log rules, and algebra) that the solution is given by here is called the carrying capacity of the population\/system.     Newton's Law of Cooling   Consider an object taken from a hotter environment and placed in a cooler one. We might assume that it cools in a way that is proportional the difference of its temperature and the temperature of the cooler environment. This results in the following differential equation: where is the temperature of the object, is a proportionality constant, and is the ambient temperature. This is a separable equation and results in the solution       Starbucks' tea is poured from a machine which dispenses water at approximately . You really don't want to drink basically boiling water, so you wait until it cools down to about . How long should you wait to drink the tea if the ambient temperature is ?     "
},
{
  "id": "fo2-2",
  "level": "2",
  "url": "fo2.html#fo2-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "   I can determine when to use separation of variables to solve a first-order differential equation and appropriately apply the technique to find a solution.    "
},
{
  "id": "def-separable-ode",
  "level": "2",
  "url": "fo2.html#def-separable-ode",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Separable Differential Equation.",
  "body": " Separable Differential Equation  separable differential equation  differential equation (separable)   A differential equation is said to be separable if it can be written in the form   Alternately, one can write a separable equation as where .   "
},
{
  "id": "sec-separation-of-variables-intro-3",
  "level": "2",
  "url": "fo2.html#sec-separation-of-variables-intro-3",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  The equation is separable because we can write it as To solve it, we integrate both sides:    "
},
{
  "id": "sec-separation-of-variables-intro-4",
  "level": "2",
  "url": "fo2.html#sec-separation-of-variables-intro-4",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "",
  "body": "  For the following ODEs, determine if it is separable. If it is, find the general solution. If it isn't, explain why.         with                 "
},
{
  "id": "exponential-growth-proof",
  "level": "2",
  "url": "fo2.html#exponential-growth-proof",
  "type": "Example",
  "number": "1.2.4",
  "title": "Exponential Growth\/Decay.",
  "body": " Exponential Growth\/Decay   Exponential growth, introduced in , is derived from a separable equation. We assume that growth of a population (bacteria, rabbits, etc.) is proportional to its population at time . Because growth describes a rate of change, we have Separation of variables shows that or If , we say that the population is experiencing growth; if , the population experiences decay.   "
},
{
  "id": "sec-separation-of-variables-applications-3",
  "level": "2",
  "url": "fo2.html#sec-separation-of-variables-applications-3",
  "type": "Checkpoint",
  "number": "1.2.5",
  "title": "",
  "body": "  The mean half-life of a prescription drug is 12.5 hours. Find the constant of proportionality for the drug.   "
},
{
  "id": "logistic-growth",
  "level": "2",
  "url": "fo2.html#logistic-growth",
  "type": "Example",
  "number": "1.2.6",
  "title": "Logistic Growth\/Decay.",
  "body": " Logistic Growth\/Decay   Exponential growth is not realistic for most population situations. Environmental constraints such as access to food, shelter, etc. will naturally limit the rate of population growth.  Let's make the assumption that the rate of change of population is positive until a certain value is reached; call that number . After the population reaches , the growth rate becomes negative (note: not the population , its growth rate). Based on these assumptions, we modify the exponential growth equation by multiplying by a function : What does look like? When is smaller than , we want to be close to 1; when , we want . After some experimentation, we might settle on . In particular, this tells us that when , there is zero population growth, which makes sense based on our assumptions.  Now we have which is a separable equation. You should check (this requires partial fraction decomposition, some log rules, and algebra) that the solution is given by here is called the carrying capacity of the population\/system.   "
},
{
  "id": "newtons-law-cooling",
  "level": "2",
  "url": "fo2.html#newtons-law-cooling",
  "type": "Example",
  "number": "1.2.7",
  "title": "Newton’s Law of Cooling.",
  "body": " Newton's Law of Cooling   Consider an object taken from a hotter environment and placed in a cooler one. We might assume that it cools in a way that is proportional the difference of its temperature and the temperature of the cooler environment. This results in the following differential equation: where is the temperature of the object, is a proportionality constant, and is the ambient temperature. This is a separable equation and results in the solution    "
},
{
  "id": "sec-separation-of-variables-applications-6",
  "level": "2",
  "url": "fo2.html#sec-separation-of-variables-applications-6",
  "type": "Checkpoint",
  "number": "1.2.8",
  "title": "",
  "body": "  Starbucks' tea is poured from a machine which dispenses water at approximately . You really don't want to drink basically boiling water, so you wait until it cools down to about . How long should you wait to drink the tea if the ambient temperature is ?   "
},
{
  "id": "fo3",
  "level": "1",
  "url": "fo3.html",
  "type": "Section",
  "number": "1.3",
  "title": "FO3: The Integrating Factor",
  "body": " FO3: The Integrating Factor     I can determine when to use the integrating factor to solve a first-order differential equation and appropriately apply the technique to find a solution.      Linear Equations   Linear Equation  linear equation   A linear equation is a differential equation of the form where are known functions.      The equation is a linear equation with and .  The equation isn't in a linear form, but can be manipulated to be in one; dividing both sides by (assuming ), we get so that and       The Integrating Factor   The Integrating Factor  integrating factor   The integrating factor of a linear equation is the expression       Consider again the equation Here . This means that the integrating factor is given by We can ignore the constant of integration, as it gets taken care of later.  The purpose of the integrating factor is to help mimic the product rule; this means that we need to multiply both sides of the equation by : Using the product rule to collapse the left hand side gives us Now we can integrate both sides: so that       Show that the solution to the initial value problem is precisely       According to Kirchoff's voltage law, the sum of the voltage drop across the inductor and voltage drop across the resistor is the same as the impressed voltage on the circuit.  Write the corresponding ODE and show that, for a fixed impressed voltage ,      "
},
{
  "id": "fo3-2",
  "level": "2",
  "url": "fo3.html#fo3-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "   I can determine when to use the integrating factor to solve a first-order differential equation and appropriately apply the technique to find a solution.    "
},
{
  "id": "def-linear-equation",
  "level": "2",
  "url": "fo3.html#def-linear-equation",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Linear Equation.",
  "body": " Linear Equation  linear equation   A linear equation is a differential equation of the form where are known functions.   "
},
{
  "id": "sec-linear-equations-3",
  "level": "2",
  "url": "fo3.html#sec-linear-equations-3",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  The equation is a linear equation with and .  The equation isn't in a linear form, but can be manipulated to be in one; dividing both sides by (assuming ), we get so that and    "
},
{
  "id": "def-integrating-factor",
  "level": "2",
  "url": "fo3.html#def-integrating-factor",
  "type": "Definition",
  "number": "1.3.3",
  "title": "The Integrating Factor.",
  "body": " The Integrating Factor  integrating factor   The integrating factor of a linear equation is the expression    "
},
{
  "id": "sec-integrating-factor-3",
  "level": "2",
  "url": "fo3.html#sec-integrating-factor-3",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Consider again the equation Here . This means that the integrating factor is given by We can ignore the constant of integration, as it gets taken care of later.  The purpose of the integrating factor is to help mimic the product rule; this means that we need to multiply both sides of the equation by : Using the product rule to collapse the left hand side gives us Now we can integrate both sides: so that    "
},
{
  "id": "sec-integrating-factor-4",
  "level": "2",
  "url": "fo3.html#sec-integrating-factor-4",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "",
  "body": "  Show that the solution to the initial value problem is precisely    "
},
{
  "id": "sec-integrating-factor-5",
  "level": "2",
  "url": "fo3.html#sec-integrating-factor-5",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "",
  "body": "  According to Kirchoff's voltage law, the sum of the voltage drop across the inductor and voltage drop across the resistor is the same as the impressed voltage on the circuit.  Write the corresponding ODE and show that, for a fixed impressed voltage ,    "
},
{
  "id": "fo4",
  "level": "1",
  "url": "fo4.html",
  "type": "Section",
  "number": "1.4",
  "title": "FO4: The Laplace Transform (First-Order Equations)",
  "body": " FO4: The Laplace Transform (First-Order Equations)     I can use the Laplace transform to solve first-order, linear differential equations with or without forcing terms.      The Laplace Transform   The Laplace Transform  Laplace transform   For a function which satisfies the condition for some constants . Then, we define the Laplace transform of to be      Inverse Laplace Transform  Laplace transform (inverse)   The inverse Laplace transform of a function is the function whose Laplace transform is , i.e the inverse Laplace transform undoes the Laplace transform.      The Laplace transform of a constant function is computed below: So       The inverse Laplace transform of the function is .      Show that for , . You will need to use integration by parts:       Show that for (where is constant), What condition(s) on must be considered in order for the Laplace transform to exist?     Table of Laplace Transforms (First)       1 ,    ,    , ,    ,    ,    ,    ,    ,    ,    , ,        Properties of the Laplace Transform   The Laplace Transform Is Linear   Let be two functions with Laplace transforms and , respectively. Let be constants. Then,       Convince yourself why this is true- think about the definition of the transform.      Solving First Order Equations with the Laplace Transform    We can compute the Laplace transform of a derivative. Consider a function and its derivative, . We can use integration by parts to find : So, taking the Laplace transform of a derivative requires the knowledge of the initial value of the function .      Let and ; to find , we know that But we also know that from , so we have or so that Using to find the inverse transform, we get which is what we would have gotten if we solved the initial value problem using the techniques we already know.     Solving First-Order ODEs with the Laplace Transform  To solve a differential equation of the form ,   Compute the transform of the left hand side    Find the transform of the right hand side    Solve for     Use algebra to rewrite the right hand side so that you can apply the inverse transform from .        Suppose we wish to solve the initial value problem using the Laplace transform.  Begin by taking the transform of both sides. and So all together, the transformed equation is   Rearranging to solve for , we have The first term requires partial fraction decomposition. Write it as Now, from which we get the system and the solutions of , and . This gives   To use the inverse transform, we need to write each term on the right hand side in a way which is consistent with . First, Now applying the inverse transform to each term gives us   We could have used the integrating factor instead of the Laplace transform; this would be a good place to practice that technique.      Show that the solution to the IVP is given by      "
},
{
  "id": "fo4-2",
  "level": "2",
  "url": "fo4.html#fo4-2",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "   I can use the Laplace transform to solve first-order, linear differential equations with or without forcing terms.    "
},
{
  "id": "def-laplace-transform",
  "level": "2",
  "url": "fo4.html#def-laplace-transform",
  "type": "Definition",
  "number": "1.4.1",
  "title": "The Laplace Transform.",
  "body": " The Laplace Transform  Laplace transform   For a function which satisfies the condition for some constants . Then, we define the Laplace transform of to be    "
},
{
  "id": "def-inverse-laplace-transform",
  "level": "2",
  "url": "fo4.html#def-inverse-laplace-transform",
  "type": "Definition",
  "number": "1.4.2",
  "title": "Inverse Laplace Transform.",
  "body": " Inverse Laplace Transform  Laplace transform (inverse)   The inverse Laplace transform of a function is the function whose Laplace transform is , i.e the inverse Laplace transform undoes the Laplace transform.   "
},
{
  "id": "sec-laplace-transform-intro-4",
  "level": "2",
  "url": "fo4.html#sec-laplace-transform-intro-4",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "  The Laplace transform of a constant function is computed below: So    "
},
{
  "id": "sec-laplace-transform-intro-5",
  "level": "2",
  "url": "fo4.html#sec-laplace-transform-intro-5",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  The inverse Laplace transform of the function is .   "
},
{
  "id": "sec-laplace-transform-intro-6",
  "level": "2",
  "url": "fo4.html#sec-laplace-transform-intro-6",
  "type": "Checkpoint",
  "number": "1.4.5",
  "title": "",
  "body": "  Show that for , . You will need to use integration by parts:    "
},
{
  "id": "sec-laplace-transform-intro-7",
  "level": "2",
  "url": "fo4.html#sec-laplace-transform-intro-7",
  "type": "Checkpoint",
  "number": "1.4.6",
  "title": "",
  "body": "  Show that for (where is constant), What condition(s) on must be considered in order for the Laplace transform to exist?   "
},
{
  "id": "table-laplace-transforms-first",
  "level": "2",
  "url": "fo4.html#table-laplace-transforms-first",
  "type": "Table",
  "number": "1.4.7",
  "title": "Table of Laplace Transforms (First)",
  "body": " Table of Laplace Transforms (First)       1 ,    ,    , ,    ,    ,    ,    ,    ,    ,    , ,     "
},
{
  "id": "thm-laplace-transform-linear",
  "level": "2",
  "url": "fo4.html#thm-laplace-transform-linear",
  "type": "Theorem",
  "number": "1.4.8",
  "title": "The Laplace Transform Is Linear.",
  "body": " The Laplace Transform Is Linear   Let be two functions with Laplace transforms and , respectively. Let be constants. Then,    "
},
{
  "id": "sec-laplace-transform-properties-3",
  "level": "2",
  "url": "fo4.html#sec-laplace-transform-properties-3",
  "type": "Checkpoint",
  "number": "1.4.9",
  "title": "",
  "body": "  Convince yourself why this is true- think about the definition of the transform.   "
},
{
  "id": "sec-laplace-transform-solving-first-order-2",
  "level": "2",
  "url": "fo4.html#sec-laplace-transform-solving-first-order-2",
  "type": "Example",
  "number": "1.4.10",
  "title": "",
  "body": "  We can compute the Laplace transform of a derivative. Consider a function and its derivative, . We can use integration by parts to find : So, taking the Laplace transform of a derivative requires the knowledge of the initial value of the function .   "
},
{
  "id": "sec-laplace-transform-solving-first-order-3",
  "level": "2",
  "url": "fo4.html#sec-laplace-transform-solving-first-order-3",
  "type": "Example",
  "number": "1.4.11",
  "title": "",
  "body": "  Let and ; to find , we know that But we also know that from , so we have or so that Using to find the inverse transform, we get which is what we would have gotten if we solved the initial value problem using the techniques we already know.   "
},
{
  "id": "sec-laplace-transform-solving-first-order-5",
  "level": "2",
  "url": "fo4.html#sec-laplace-transform-solving-first-order-5",
  "type": "Example",
  "number": "1.4.12",
  "title": "",
  "body": "  Suppose we wish to solve the initial value problem using the Laplace transform.  Begin by taking the transform of both sides. and So all together, the transformed equation is   Rearranging to solve for , we have The first term requires partial fraction decomposition. Write it as Now, from which we get the system and the solutions of , and . This gives   To use the inverse transform, we need to write each term on the right hand side in a way which is consistent with . First, Now applying the inverse transform to each term gives us   We could have used the integrating factor instead of the Laplace transform; this would be a good place to practice that technique.   "
},
{
  "id": "sec-laplace-transform-solving-first-order-6",
  "level": "2",
  "url": "fo4.html#sec-laplace-transform-solving-first-order-6",
  "type": "Checkpoint",
  "number": "1.4.13",
  "title": "",
  "body": "  Show that the solution to the IVP is given by    "
},
{
  "id": "fo5",
  "level": "1",
  "url": "fo5.html",
  "type": "Section",
  "number": "1.5",
  "title": "FO5: Applications of First-Order Differential Equations",
  "body": " FO5: Applications of First-Order Differential Equations     I can solve applied problems resulting from first-order differential equations.      Mixing Problems   A 100-liter tank contains 10 kilograms of salt dissolved in 60 liters of water. A solution of water and salt (brine) with a concentration of 0.1 kilograms per liter is flowing in at the rate of 5 liters a minute. The solution in the tank is well stirred and flows out at a rate of 3 liters a minute. How much salt is in the tank when the tank is full?  We need to find the differential equation which results from this setup. Let be the number of kilograms of salt in the tank, and let denote the time in minutes. Let denote the inflow rate of brine, denote the outflow rate from the tank, denote the brine concentration for the inflow, and denote the brine outflow concentration.  For some small change in time, , the change in ( ) is approximately given by Dividing through by and taking the limit as , we get So for this example, we have                   , where , so that    This gives our differential equation   We can solve using the integrating factor or the Laplace transform; no matter the method of solution, we end with To find the amount of salt, note that the net inflow rate is 2 liters per minute; this means that the tank is full when , or . So,      Financial Applications   Suppose a sum of money is deposited in a savings account that pays interest compounded continuously at a constant rate of per unit of money per unit time. If is the size of the deposit at time , then the approximate increment in is given by which resolves to the equality This is a separable equation, so we get the solution     Suppose is the amount of an outstanding loan at time , and let be the constant rate at which the money has been borrowed. Let be the repayment per unit time. For a short period of time, we have which resolves to which is a linear equation. Solving gives for the initial loan amount of .     Physics\/Engineering Applications   We will derive the formula for free fall in gravity. Let be the constant mass of an object falling in a gravitational field and let be the position, velocity, and acceleration (respectively) for the object at time . Let be the acceleration due to gravity, and let be a coefficient which characterizes the resistance of the ambient medium to the motion of the object.  Newton's Second Law of motion indicates that . To build the model, we make the assumption that the resistance in the falling body is proportional to the object's velocity. This means that the force experienced by the body is given by Since , we can rewrite which is a linear equation. Rearranging, we have Whether by the techniques of or (and noting that ), we have Since , using the initial condition , we can solve for :     "
},
{
  "id": "fo5-2",
  "level": "2",
  "url": "fo5.html#fo5-2",
  "type": "Objectives",
  "number": "1.5",
  "title": "",
  "body": "   I can solve applied problems resulting from first-order differential equations.    "
},
{
  "id": "sec-first-order-applications-mixing-first-order-2",
  "level": "2",
  "url": "fo5.html#sec-first-order-applications-mixing-first-order-2",
  "type": "Example",
  "number": "1.5.1",
  "title": "",
  "body": " A 100-liter tank contains 10 kilograms of salt dissolved in 60 liters of water. A solution of water and salt (brine) with a concentration of 0.1 kilograms per liter is flowing in at the rate of 5 liters a minute. The solution in the tank is well stirred and flows out at a rate of 3 liters a minute. How much salt is in the tank when the tank is full?  We need to find the differential equation which results from this setup. Let be the number of kilograms of salt in the tank, and let denote the time in minutes. Let denote the inflow rate of brine, denote the outflow rate from the tank, denote the brine concentration for the inflow, and denote the brine outflow concentration.  For some small change in time, , the change in ( ) is approximately given by Dividing through by and taking the limit as , we get So for this example, we have                   , where , so that    This gives our differential equation   We can solve using the integrating factor or the Laplace transform; no matter the method of solution, we end with To find the amount of salt, note that the net inflow rate is 2 liters per minute; this means that the tank is full when , or . So,   "
},
{
  "id": "sec-first-order-applications-finance-2",
  "level": "2",
  "url": "fo5.html#sec-first-order-applications-finance-2",
  "type": "Example",
  "number": "1.5.2",
  "title": "",
  "body": " Suppose a sum of money is deposited in a savings account that pays interest compounded continuously at a constant rate of per unit of money per unit time. If is the size of the deposit at time , then the approximate increment in is given by which resolves to the equality This is a separable equation, so we get the solution   "
},
{
  "id": "sec-first-order-applications-finance-3",
  "level": "2",
  "url": "fo5.html#sec-first-order-applications-finance-3",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": " Suppose is the amount of an outstanding loan at time , and let be the constant rate at which the money has been borrowed. Let be the repayment per unit time. For a short period of time, we have which resolves to which is a linear equation. Solving gives for the initial loan amount of .  "
},
{
  "id": "sec-first-order-applications-physics-engineering-2",
  "level": "2",
  "url": "fo5.html#sec-first-order-applications-physics-engineering-2",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": " We will derive the formula for free fall in gravity. Let be the constant mass of an object falling in a gravitational field and let be the position, velocity, and acceleration (respectively) for the object at time . Let be the acceleration due to gravity, and let be a coefficient which characterizes the resistance of the ambient medium to the motion of the object.  Newton's Second Law of motion indicates that . To build the model, we make the assumption that the resistance in the falling body is proportional to the object's velocity. This means that the force experienced by the body is given by Since , we can rewrite which is a linear equation. Rearranging, we have Whether by the techniques of or (and noting that ), we have Since , using the initial condition , we can solve for :   "
},
{
  "id": "fo6",
  "level": "1",
  "url": "fo6.html",
  "type": "Section",
  "number": "1.6",
  "title": "FO6: Slope Fields",
  "body": " FO6: Slope Fields     I can use a slope field to analyze the behaviors of solutions to a differential equation.      Slope Field  slope field   For a differential equation of the form , its slope field is the collection of lines of slopes to solution curves at various points in the plane.      The slope field for the differential equation is given below, along with three solution curves.      f(x,y) = 3*x^2 -5        x    y(x)   gap = 1          The slope field of , along with three solutions   This is separable, and we get the family of solutions , which aligns well with the images in the graph above. The different curves drawn correspond to different initial values of the function.      Slope fields can be used to analyze the qualitative behavior of solutions to functions. Take for example the differential equation This is neither linear nor separable, so we can't solve it using any known techniques. The slope field can help us determine the long-term behavior of the ODE.      f(t,y) = t - y^2        t    y(t)   gap = 1          The slope field of       Below is the slope field for the differential equation .      f(t,y) = t - 2*t*y        t    x(t)   gap = 1          The slope field of .      Describe the behavior of the solution when .    The equation is separable. Determine the solution and compare the behaviors.       "
},
{
  "id": "fo6-2",
  "level": "2",
  "url": "fo6.html#fo6-2",
  "type": "Objectives",
  "number": "1.6",
  "title": "",
  "body": "   I can use a slope field to analyze the behaviors of solutions to a differential equation.    "
},
{
  "id": "def-slope-field",
  "level": "2",
  "url": "fo6.html#def-slope-field",
  "type": "Definition",
  "number": "1.6.1",
  "title": "Slope Field.",
  "body": " Slope Field  slope field   For a differential equation of the form , its slope field is the collection of lines of slopes to solution curves at various points in the plane.   "
},
{
  "id": "fo6-4",
  "level": "2",
  "url": "fo6.html#fo6-4",
  "type": "Example",
  "number": "1.6.2",
  "title": "",
  "body": "  The slope field for the differential equation is given below, along with three solution curves.      f(x,y) = 3*x^2 -5        x    y(x)   gap = 1          The slope field of , along with three solutions   This is separable, and we get the family of solutions , which aligns well with the images in the graph above. The different curves drawn correspond to different initial values of the function.   "
},
{
  "id": "fo6-5",
  "level": "2",
  "url": "fo6.html#fo6-5",
  "type": "Example",
  "number": "1.6.4",
  "title": "",
  "body": "  Slope fields can be used to analyze the qualitative behavior of solutions to functions. Take for example the differential equation This is neither linear nor separable, so we can't solve it using any known techniques. The slope field can help us determine the long-term behavior of the ODE.      f(t,y) = t - y^2        t    y(t)   gap = 1          The slope field of    "
},
{
  "id": "fo6-6",
  "level": "2",
  "url": "fo6.html#fo6-6",
  "type": "Checkpoint",
  "number": "1.6.6",
  "title": "",
  "body": "  Below is the slope field for the differential equation .      f(t,y) = t - 2*t*y        t    x(t)   gap = 1          The slope field of .      Describe the behavior of the solution when .    The equation is separable. Determine the solution and compare the behaviors.      "
},
{
  "id": "fo7",
  "level": "1",
  "url": "fo7.html",
  "type": "Section",
  "number": "1.7",
  "title": "FO7: Equilibrium Points &amp; Autonomous Equations",
  "body": " FO7: Equilibrium Points & Autonomous Equations     I can determine the equilibrium solutions of autonomous differential equations and use a phase line (and associated terminology) to describe their behavior.      Autonomous Equations   Autonomous Equation  autonomous equation   A differential equation is said to be autonomous if it can be written in the form That is, the differential equation does not depend on the independent variable.     Solving Autonomous Equations  All autonomous equations are separable, and so can be solved using that technique; not all will result in closed-form solutions.     Autonomous equations have particularly nice slope fields.  Consider the differential equation This is of the form given by , so we should expect solutions to look like logistic functions. Indeed, solving results in for some constant . The resulting slope field takes the form below.      f(x,y) = 0.1*y*(5-y)        x    y(x)   gap = 1                 The slope field for the equation .   The blue solution curves correspond to initial values for which the solution is bounded below by 0 and grows to the carrying capacity of the system; the red solution curves show initial values below zero, and the green solution curves show initial values above .  Note the horizontal lines which create asymptotes for the solution curves. We call these output values equilibrium solutions       Equilibrium Solutions & Phase Lines   Equilibrium Solution  equilibrium solution (autonomous equation)   An equilibrium solution for an autonomous ODE occurs when       In , we see from that there are two equilibrium solutions: and .  If we assume that the example describes the growth of a population, then the equilibrium solutions are communicating the carrying capacity of the population ( ) and the zero-population point ( ).  For initial values within the interval , we see population growth to the equilibrium point; for initial values outside of the equilibrium solutions, we see either a tendency away from (initial conditions below 0) or toward (initial conditions above 5) the equilibrium solutions. Physically, the first set of initial conditions don't make sense in a population context, but the second set of initial conditions demonstrate that when population is above the carrying capacity, it will always tend back toward the carrying capacity of the system.     When analyzing the qualitative behavior of autonomous differential equations, we can use a phase line or phase diagram to capture the entirety of the behavior without sketching the slope field.    Phase Line\/Phase Diagram  phase line  phase diagram   For an autonomous differential equation, the phase line or phase diagram for the differential equation is a diagram which captures the long-term behavior, drawn in the form of a line.      Again drawing on , from the slope field in , we note that initial conditions above the carrying capacity result in solutions tending down toward the carrying capacity, while those below the zero-point tend toward .  To draw the phase line, draw a line (traditionally vertical, but horizontal communicates the same idea) with the equilibrium points marked.  Then, use the information given to draw arrows in the segments created to indicate the direction of flow of the solutions.  The phase line for is shown below.          y(x) = 5  y(x) = 0      The phase line for the solutions to the equation      Source\/Sink\/Node  source  sink  node   An equilibrium solution is said to be a source if solution curves nearby tend away from the equilibrium solution.  An equilibrium solution is said to be a sink if solution curves nearby tend toward the equilibrium solution.  An equilibrium solution is said to be a node if it exhibits both source and sink behavior.      For and , the equilibrium solution is a sink because the solutions on either side tend toward 5; on the other hand, is a source because the solutions on either side tend away from 0.      For each differential equation below, draw the phase line and classify each equilibrium solution as a sink, source, or node.                             "
},
{
  "id": "fo7-2",
  "level": "2",
  "url": "fo7.html#fo7-2",
  "type": "Objectives",
  "number": "1.7",
  "title": "",
  "body": "   I can determine the equilibrium solutions of autonomous differential equations and use a phase line (and associated terminology) to describe their behavior.    "
},
{
  "id": "def-autonomous-equation",
  "level": "2",
  "url": "fo7.html#def-autonomous-equation",
  "type": "Definition",
  "number": "1.7.1",
  "title": "Autonomous Equation.",
  "body": " Autonomous Equation  autonomous equation   A differential equation is said to be autonomous if it can be written in the form That is, the differential equation does not depend on the independent variable.   "
},
{
  "id": "fo7-autonomous-ex-logistic",
  "level": "2",
  "url": "fo7.html#fo7-autonomous-ex-logistic",
  "type": "Example",
  "number": "1.7.2",
  "title": "",
  "body": "  Autonomous equations have particularly nice slope fields.  Consider the differential equation This is of the form given by , so we should expect solutions to look like logistic functions. Indeed, solving results in for some constant . The resulting slope field takes the form below.      f(x,y) = 0.1*y*(5-y)        x    y(x)   gap = 1                 The slope field for the equation .   The blue solution curves correspond to initial values for which the solution is bounded below by 0 and grows to the carrying capacity of the system; the red solution curves show initial values below zero, and the green solution curves show initial values above .  Note the horizontal lines which create asymptotes for the solution curves. We call these output values equilibrium solutions    "
},
{
  "id": "def-equilibrium-solution",
  "level": "2",
  "url": "fo7.html#def-equilibrium-solution",
  "type": "Definition",
  "number": "1.7.4",
  "title": "Equilibrium Solution.",
  "body": " Equilibrium Solution  equilibrium solution (autonomous equation)   An equilibrium solution for an autonomous ODE occurs when    "
},
{
  "id": "sec-equilibrium-solutions-autonomous-3",
  "level": "2",
  "url": "fo7.html#sec-equilibrium-solutions-autonomous-3",
  "type": "Example",
  "number": "1.7.5",
  "title": "",
  "body": "  In , we see from that there are two equilibrium solutions: and .  If we assume that the example describes the growth of a population, then the equilibrium solutions are communicating the carrying capacity of the population ( ) and the zero-population point ( ).  For initial values within the interval , we see population growth to the equilibrium point; for initial values outside of the equilibrium solutions, we see either a tendency away from (initial conditions below 0) or toward (initial conditions above 5) the equilibrium solutions. Physically, the first set of initial conditions don't make sense in a population context, but the second set of initial conditions demonstrate that when population is above the carrying capacity, it will always tend back toward the carrying capacity of the system.   "
},
{
  "id": "sec-equilibrium-solutions-autonomous-4",
  "level": "2",
  "url": "fo7.html#sec-equilibrium-solutions-autonomous-4",
  "type": "Note",
  "number": "1.7.6",
  "title": "",
  "body": " When analyzing the qualitative behavior of autonomous differential equations, we can use a phase line or phase diagram to capture the entirety of the behavior without sketching the slope field.  "
},
{
  "id": "def-phase-line",
  "level": "2",
  "url": "fo7.html#def-phase-line",
  "type": "Definition",
  "number": "1.7.7",
  "title": "Phase Line\/Phase Diagram.",
  "body": " Phase Line\/Phase Diagram  phase line  phase diagram   For an autonomous differential equation, the phase line or phase diagram for the differential equation is a diagram which captures the long-term behavior, drawn in the form of a line.   "
},
{
  "id": "sec-equilibrium-solutions-autonomous-6",
  "level": "2",
  "url": "fo7.html#sec-equilibrium-solutions-autonomous-6",
  "type": "Example",
  "number": "1.7.8",
  "title": "",
  "body": "  Again drawing on , from the slope field in , we note that initial conditions above the carrying capacity result in solutions tending down toward the carrying capacity, while those below the zero-point tend toward .  To draw the phase line, draw a line (traditionally vertical, but horizontal communicates the same idea) with the equilibrium points marked.  Then, use the information given to draw arrows in the segments created to indicate the direction of flow of the solutions.  The phase line for is shown below.          y(x) = 5  y(x) = 0      The phase line for the solutions to the equation    "
},
{
  "id": "def-equilibrium-source-sink-node",
  "level": "2",
  "url": "fo7.html#def-equilibrium-source-sink-node",
  "type": "Definition",
  "number": "1.7.10",
  "title": "Source\/Sink\/Node.",
  "body": " Source\/Sink\/Node  source  sink  node   An equilibrium solution is said to be a source if solution curves nearby tend away from the equilibrium solution.  An equilibrium solution is said to be a sink if solution curves nearby tend toward the equilibrium solution.  An equilibrium solution is said to be a node if it exhibits both source and sink behavior.   "
},
{
  "id": "sec-equilibrium-solutions-autonomous-8",
  "level": "2",
  "url": "fo7.html#sec-equilibrium-solutions-autonomous-8",
  "type": "Example",
  "number": "1.7.11",
  "title": "",
  "body": "  For and , the equilibrium solution is a sink because the solutions on either side tend toward 5; on the other hand, is a source because the solutions on either side tend away from 0.   "
},
{
  "id": "sec-equilibrium-solutions-autonomous-9",
  "level": "2",
  "url": "fo7.html#sec-equilibrium-solutions-autonomous-9",
  "type": "Checkpoint",
  "number": "1.7.12",
  "title": "",
  "body": "  For each differential equation below, draw the phase line and classify each equilibrium solution as a sink, source, or node.                           "
},
{
  "id": "fo8",
  "level": "1",
  "url": "fo8.html",
  "type": "Section",
  "number": "1.8",
  "title": "FO8: Bifurcations",
  "body": " FO8: Bifurcations     I can determine the bifurcation values of a one-parameter family of differential equations and describe the corresponding change in solution behavior using phase lines.      Bifurcations   One-Parameter Family  differential equation (one-parameter family)   A one-parameter family of differential equations is a collection which depends on some parameter, often denoted or .      Consider the equation It can (and should) be checked that there are two equilibrium solutions, one at and one at .  The phase diagram for the differential equation shows that that is a sink while is a source.  If we make the constant term a parameter, we have Now the phase diagram depends on the value of ; if , for example, we have one equilibrium solution at , while there are no equilibrium solutions for .     Bifurcation  bifurcation   A bifurcation in the solution to a one-parameter family of differential equations is a change in the long-term behavior of the solution.      For the equation There is a bifurcation at because for values , there are two equilibrium solutions, one at , and none for .      The equation has equilibrium points at and . Because the latter equilibria don't exist for , there is a bifurcation at .  We can capture this behavior using phase lines and a phase diagram.              \\mu=-2  \\mu=-1  \\mu=0  \\mu=1  \\mu=2    0      0      0        -1  0  1          -\\sqrt{2}  0  \\sqrt{2}          The phase diagram for      "
},
{
  "id": "fo8-2",
  "level": "2",
  "url": "fo8.html#fo8-2",
  "type": "Objectives",
  "number": "1.8",
  "title": "",
  "body": "   I can determine the bifurcation values of a one-parameter family of differential equations and describe the corresponding change in solution behavior using phase lines.    "
},
{
  "id": "def-one-parameter-family",
  "level": "2",
  "url": "fo8.html#def-one-parameter-family",
  "type": "Definition",
  "number": "1.8.1",
  "title": "One-Parameter Family.",
  "body": " One-Parameter Family  differential equation (one-parameter family)   A one-parameter family of differential equations is a collection which depends on some parameter, often denoted or .   "
},
{
  "id": "sec-bifurcations-3",
  "level": "2",
  "url": "fo8.html#sec-bifurcations-3",
  "type": "Example",
  "number": "1.8.2",
  "title": "",
  "body": "  Consider the equation It can (and should) be checked that there are two equilibrium solutions, one at and one at .  The phase diagram for the differential equation shows that that is a sink while is a source.  If we make the constant term a parameter, we have Now the phase diagram depends on the value of ; if , for example, we have one equilibrium solution at , while there are no equilibrium solutions for .   "
},
{
  "id": "def-bifurcation",
  "level": "2",
  "url": "fo8.html#def-bifurcation",
  "type": "Definition",
  "number": "1.8.3",
  "title": "Bifurcation.",
  "body": " Bifurcation  bifurcation   A bifurcation in the solution to a one-parameter family of differential equations is a change in the long-term behavior of the solution.   "
},
{
  "id": "sec-bifurcations-5",
  "level": "2",
  "url": "fo8.html#sec-bifurcations-5",
  "type": "Example",
  "number": "1.8.4",
  "title": "",
  "body": "  For the equation There is a bifurcation at because for values , there are two equilibrium solutions, one at , and none for .   "
},
{
  "id": "sec-bifurcations-6",
  "level": "2",
  "url": "fo8.html#sec-bifurcations-6",
  "type": "Example",
  "number": "1.8.5",
  "title": "",
  "body": "  The equation has equilibrium points at and . Because the latter equilibria don't exist for , there is a bifurcation at .  We can capture this behavior using phase lines and a phase diagram.              \\mu=-2  \\mu=-1  \\mu=0  \\mu=1  \\mu=2    0      0      0        -1  0  1          -\\sqrt{2}  0  \\sqrt{2}          The phase diagram for    "
},
{
  "id": "so1",
  "level": "1",
  "url": "so1.html",
  "type": "Section",
  "number": "2.1",
  "title": "SO1: Linear Homogeneous Differential Equations",
  "body": " SO1: Linear Homogeneous Differential Equations     I can solve linear, homogenous differential equations of any order.      For this module, we will consider homogeneous (see ), linear (see ), constant coefficient differential equations.    Solving Second Order Linear Homogeneous Constant Coefficient ODEs    Consider a differential equation of the form where are constants with . We want a solution which stays relatively stable under differentiation; a natural choice is , since , , and more generally .  Substituting this in to the equation gives Since , the equation only holds if . We can solve this via the quadratic equation:  is called the characteristic equation for the differential equation.  Because there are three possibilities for roots of the characteristic equation (2 real roots, 1 repeated real root, 2 complex roots), we have three corresponding possibilities for the roots of a second-order, linear, homogeneous, constant coefficient differential equation:    : 2 real roots     : 1 repeated root     : 2 complex roots        Two Real Roots    The equation has characteristic equation , which has roots . This means that, based on the guess , we have solutions of and . By the principle of superposition (see ), the solution for the differential equation is       One Repeated Root    The equation has a repeated root of . This means that we have a solution of ; the second solution will take the form .     In general, if a root has multiplicity , its corresponding solution will take the form      Two Complex Roots   Euler's Formula         If the characteristic equation for an ODE has roots , where , then the solution is given by      The equation has roots , so the solution is given by       "
},
{
  "id": "so1-2",
  "level": "2",
  "url": "so1.html#so1-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "   I can solve linear, homogenous differential equations of any order.    "
},
{
  "id": "sec-linear-homo-const-coeff-so-2",
  "level": "2",
  "url": "so1.html#sec-linear-homo-const-coeff-so-2",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": "  Consider a differential equation of the form where are constants with . We want a solution which stays relatively stable under differentiation; a natural choice is , since , , and more generally .  Substituting this in to the equation gives Since , the equation only holds if . We can solve this via the quadratic equation:  is called the characteristic equation for the differential equation.  Because there are three possibilities for roots of the characteristic equation (2 real roots, 1 repeated real root, 2 complex roots), we have three corresponding possibilities for the roots of a second-order, linear, homogeneous, constant coefficient differential equation:    : 2 real roots     : 1 repeated root     : 2 complex roots      "
},
{
  "id": "sec-linear-homo-const-coeff-so-realroots-2",
  "level": "2",
  "url": "so1.html#sec-linear-homo-const-coeff-so-realroots-2",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  The equation has characteristic equation , which has roots . This means that, based on the guess , we have solutions of and . By the principle of superposition (see ), the solution for the differential equation is    "
},
{
  "id": "sec-linear-homo-const-coeff-so-repeatedroots-2",
  "level": "2",
  "url": "so1.html#sec-linear-homo-const-coeff-so-repeatedroots-2",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "  The equation has a repeated root of . This means that we have a solution of ; the second solution will take the form .   "
},
{
  "id": "thm-eulers-formula",
  "level": "2",
  "url": "so1.html#thm-eulers-formula",
  "type": "Theorem",
  "number": "2.1.4",
  "title": "Euler’s Formula.",
  "body": " Euler's Formula       "
},
{
  "id": "sec-linear-homo-const-coeff-so-complexroots-4",
  "level": "2",
  "url": "so1.html#sec-linear-homo-const-coeff-so-complexroots-4",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  The equation has roots , so the solution is given by    "
},
{
  "id": "so2",
  "level": "1",
  "url": "so2.html",
  "type": "Section",
  "number": "2.2",
  "title": "SO2: Linear Non-Homogeneous Differential Equations",
  "body": " SO2: Linear Non-Homogeneous Differential Equations     I can solve linear, non-homogeneous differential equations of any order.       "
},
{
  "id": "so2-2",
  "level": "2",
  "url": "so2.html#so2-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "   I can solve linear, non-homogeneous differential equations of any order.    "
},
{
  "id": "so3",
  "level": "1",
  "url": "so3.html",
  "type": "Section",
  "number": "2.3",
  "title": "SO3: The Laplace Transform (Second-Order Equations)",
  "body": " SO3: The Laplace Transform (Second-Order Equations)     I can use the Laplace transform to solve second-order, linear differential equations.       "
},
{
  "id": "so3-2",
  "level": "2",
  "url": "so3.html#so3-2",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "   I can use the Laplace transform to solve second-order, linear differential equations.    "
},
{
  "id": "so4",
  "level": "1",
  "url": "so4.html",
  "type": "Section",
  "number": "2.4",
  "title": "SO4: The Laplace Transform (Unit Step and Impulse Functions)",
  "body": " SO4: The Laplace Transform (Unit Step and Impulse Functions)     I can use the Laplace transform to solve differential equations involving unit step or impulse functions.       "
},
{
  "id": "so4-2",
  "level": "2",
  "url": "so4.html#so4-2",
  "type": "Objectives",
  "number": "2.4",
  "title": "",
  "body": "   I can use the Laplace transform to solve differential equations involving unit step or impulse functions.    "
},
{
  "id": "so5",
  "level": "1",
  "url": "so5.html",
  "type": "Section",
  "number": "2.5",
  "title": "SO5: The Laplace Transform (Convolutions)",
  "body": " SO5: The Laplace Transform (Convolutions)     I can use the Laplace transform to compute the convolution of two functions.       "
},
{
  "id": "so5-2",
  "level": "2",
  "url": "so5.html#so5-2",
  "type": "Objectives",
  "number": "2.5",
  "title": "",
  "body": "   I can use the Laplace transform to compute the convolution of two functions.    "
},
{
  "id": "so6",
  "level": "1",
  "url": "so6.html",
  "type": "Section",
  "number": "2.6",
  "title": "SO6: Applications of Second-Order Differential Equations",
  "body": " SO6: Applications of Second-Order Differential Equations     I can solve applied problems resulting from second-order differential equations.       "
},
{
  "id": "so6-2",
  "level": "2",
  "url": "so6.html#so6-2",
  "type": "Objectives",
  "number": "2.6",
  "title": "",
  "body": "   I can solve applied problems resulting from second-order differential equations.    "
},
{
  "id": "sd1",
  "level": "1",
  "url": "sd1.html",
  "type": "Section",
  "number": "3.1",
  "title": "SD1: Solutions to Differential Equations",
  "body": " SD1: Solutions to Differential Equations     I can use matrix algebra to compute linear combinations, products of matrices, and determinants of matrices, as well as determine when these are not possible.       "
},
{
  "id": "sd1-2",
  "level": "2",
  "url": "sd1.html#sd1-2",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "   I can use matrix algebra to compute linear combinations, products of matrices, and determinants of matrices, as well as determine when these are not possible.    "
},
{
  "id": "sd2",
  "level": "1",
  "url": "sd2.html",
  "type": "Section",
  "number": "3.2",
  "title": "SD2: Eigenvalues &amp; Eigenvectors; Linear Independence",
  "body": " SD2: Eigenvalues & Eigenvectors; Linear Independence     I can find the eigenvalues and eigenvectors for a 2x2 matrix, and determine when any two vectors are linearly independent.       "
},
{
  "id": "sd2-2",
  "level": "2",
  "url": "sd2.html#sd2-2",
  "type": "Objectives",
  "number": "3.2",
  "title": "",
  "body": "   I can find the eigenvalues and eigenvectors for a 2x2 matrix, and determine when any two vectors are linearly independent.    "
},
{
  "id": "sd3",
  "level": "1",
  "url": "sd3.html",
  "type": "Section",
  "number": "3.3",
  "title": "SD3: Complex &amp; Real Eigenvalues",
  "body": " SD3: Complex & Real Eigenvalues     I can solve a system of differential equations with complex or distinct real eigenvalues.       "
},
{
  "id": "sd3-2",
  "level": "2",
  "url": "sd3.html#sd3-2",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "   I can solve a system of differential equations with complex or distinct real eigenvalues.    "
},
{
  "id": "sd4",
  "level": "1",
  "url": "sd4.html",
  "type": "Section",
  "number": "3.4",
  "title": "SD4: Repeated Eigenvalues",
  "body": " SD4: Repeated Eigenvalues     I can solve a system of differential equations with repeated real eigenvalues.       "
},
{
  "id": "sd4-2",
  "level": "2",
  "url": "sd4.html#sd4-2",
  "type": "Objectives",
  "number": "3.4",
  "title": "",
  "body": "   I can solve a system of differential equations with repeated real eigenvalues.    "
},
{
  "id": "sd5",
  "level": "1",
  "url": "sd5.html",
  "type": "Section",
  "number": "3.5",
  "title": "SD5: Applications of Systems of Equations",
  "body": " SD5: Applications of Systems of Equations     I can use systems of differential equations to solve applied problems.       "
},
{
  "id": "sd5-2",
  "level": "2",
  "url": "sd5.html#sd5-2",
  "type": "Objectives",
  "number": "3.5",
  "title": "",
  "body": "   I can use systems of differential equations to solve applied problems.    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
