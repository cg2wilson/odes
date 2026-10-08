var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "schedule",
  "level": "1",
  "url": "schedule.html",
  "type": "Section",
  "number": "0.1",
  "title": "Course Details",
  "body": " Course Details    Course Calendar       Course Information  This is the course information Math 2413-TR02S for Spring 2027.    Instructor  Cory Wilson    Office & Email  SEM 2B6(B) | email here     Student Hours  See Moodle    Class Meets  TR 11:00pm - 12:15pm, 2C4        "
},
{
  "id": "sec-course-information-2",
  "level": "2",
  "url": "schedule.html#sec-course-information-2",
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
  "id": "ode-what-is-3",
  "level": "2",
  "url": "fo1.html#ode-what-is-3",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  An example of an ordinary differential equation is the familiar which asks the question: \"What function y(x) has a derivative equal to 2x?\" The solution to this differential equation is the family of functions where C is an arbitrary constant. We can check that this is a solution by differentiating; , so we have have satisfied the condition stated by the differential equation.   "
},
{
  "id": "ode-what-is-4",
  "level": "2",
  "url": "fo1.html#ode-what-is-4",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  Other examples of ordinary differential equations are      "
},
{
  "id": "ode-what-is-5",
  "level": "2",
  "url": "fo1.html#ode-what-is-5",
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
  "id": "ode-solutions-to-3",
  "level": "2",
  "url": "fo1.html#ode-solutions-to-3",
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
  "id": "ode-solutions-to-5",
  "level": "2",
  "url": "fo1.html#ode-solutions-to-5",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  The acceleration of an object in free-fall is given by where is the gravitational constant. Find its position function, knowing that m and m\/s.  You likely would have encountered this kind of problem when learning integration\/antiderivatives; the solution requires integrating acceleration to find velocity and then using velocity to find position. First, we have Since , we have and . Next, we integrate again to find position: Since , we have and .   "
},
{
  "id": "ode-solutions-to-6",
  "level": "2",
  "url": "fo1.html#ode-solutions-to-6",
  "type": "Checkpoint",
  "number": "1.1.9",
  "title": "",
  "body": "  Show that the family is is a solution to the differential equation    "
},
{
  "id": "ode-solutions-to-7",
  "level": "2",
  "url": "fo1.html#ode-solutions-to-7",
  "type": "Checkpoint",
  "number": "1.1.10",
  "title": "",
  "body": "  For the differential equation Show that the families and are both solutions to the ODE. Is a solution as well?   "
},
{
  "id": "ode-solutions-to-8",
  "level": "2",
  "url": "fo1.html#ode-solutions-to-8",
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
  "id": "ode-classifying-5",
  "level": "2",
  "url": "fo1.html#ode-classifying-5",
  "type": "Note",
  "number": "1.1.16",
  "title": "",
  "body": " A homogeneous, linear ODE can always be put into the form   "
},
{
  "id": "ode-classifying-6",
  "level": "2",
  "url": "fo1.html#ode-classifying-6",
  "type": "Example",
  "number": "1.1.17",
  "title": "",
  "body": "  The equation has order 3, is linear, and homogeneous. However, is nonhomogeneous.   "
},
{
  "id": "ode-classifying-7",
  "level": "2",
  "url": "fo1.html#ode-classifying-7",
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
  "id": "separation-of-variables-intro-3",
  "level": "2",
  "url": "fo2.html#separation-of-variables-intro-3",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  The equation is separable because we can write it as To solve it, we integrate both sides:    "
},
{
  "id": "separation-of-variables-intro-4",
  "level": "2",
  "url": "fo2.html#separation-of-variables-intro-4",
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
  "id": "separation-of-variables-applications-3",
  "level": "2",
  "url": "fo2.html#separation-of-variables-applications-3",
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
  "id": "separation-of-variables-applications-6",
  "level": "2",
  "url": "fo2.html#separation-of-variables-applications-6",
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
  "id": "linear-equations-3",
  "level": "2",
  "url": "fo3.html#linear-equations-3",
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
  "id": "integrating-factor-3",
  "level": "2",
  "url": "fo3.html#integrating-factor-3",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Consider again the equation Here . This means that the integrating factor is given by We can ignore the constant of integration, as it gets taken care of later.  The purpose of the integrating factor is to help mimic the product rule; this means that we need to multiply both sides of the equation by : Using the product rule to collapse the left hand side gives us Now we can integrate both sides: so that    "
},
{
  "id": "integrating-factor-4",
  "level": "2",
  "url": "fo3.html#integrating-factor-4",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "",
  "body": "  Show that the solution to the initial value problem is precisely    "
},
{
  "id": "integrating-factor-5",
  "level": "2",
  "url": "fo3.html#integrating-factor-5",
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
  "body": " FO4: The Laplace Transform (First-Order Equations)     I can use the Laplace transform to solve first-order, linear differential equations with or without forcing terms.      The Laplace Transform   The Laplace Transform  Laplace transform   For a function which satisfies the condition for some constants . Then, we define the Laplace transform of to be      Inverse Laplace Transform  Laplace transform (inverse)   The inverse Laplace transform of a function is the function whose Laplace transform is , i.e the inverse Laplace transform undoes the Laplace transform.      The Laplace transform of a constant function is computed below: So       The inverse Laplace transform of the function is .      Show that for , . You will need to use integration by parts:       Show that for (where is constant), What condition(s) on must be considered in order for the Laplace transform to exist?     Table of Laplace Transforms (First)       1 ,    ,    , ,    , ,    ,    ,    ,    ,    ,    ,    , ,        Properties of the Laplace Transform   The Laplace Transform Is Linear   Let be two functions with Laplace transforms and , respectively. Let be constants. Then,       Convince yourself why this is true- think about the definition of the transform.     "
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
  "id": "laplace-transform-intro-4",
  "level": "2",
  "url": "fo4.html#laplace-transform-intro-4",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "  The Laplace transform of a constant function is computed below: So    "
},
{
  "id": "laplace-transform-intro-5",
  "level": "2",
  "url": "fo4.html#laplace-transform-intro-5",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  The inverse Laplace transform of the function is .   "
},
{
  "id": "laplace-transform-intro-6",
  "level": "2",
  "url": "fo4.html#laplace-transform-intro-6",
  "type": "Checkpoint",
  "number": "1.4.5",
  "title": "",
  "body": "  Show that for , . You will need to use integration by parts:    "
},
{
  "id": "laplace-transform-intro-7",
  "level": "2",
  "url": "fo4.html#laplace-transform-intro-7",
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
  "body": " Table of Laplace Transforms (First)       1 ,    ,    , ,    , ,    ,    ,    ,    ,    ,    ,    , ,     "
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
  "id": "laplace-transform-properties-3",
  "level": "2",
  "url": "fo4.html#laplace-transform-properties-3",
  "type": "Checkpoint",
  "number": "1.4.9",
  "title": "",
  "body": "  Convince yourself why this is true- think about the definition of the transform.   "
},
{
  "id": "fo5",
  "level": "1",
  "url": "fo5.html",
  "type": "Section",
  "number": "1.5",
  "title": "FO5: Applications of First-Order Differential Equations",
  "body": " FO5: Applications of First-Order Differential Equations  test  "
},
{
  "id": "fo6",
  "level": "1",
  "url": "fo6.html",
  "type": "Section",
  "number": "1.6",
  "title": "FO6: Slope Fields",
  "body": " FO6: Slope Fields  test  "
},
{
  "id": "fo7",
  "level": "1",
  "url": "fo7.html",
  "type": "Section",
  "number": "1.7",
  "title": "FO7: Equilibrium Points &amp; Autonomous Equations",
  "body": " FO7: Equilibrium Points & Autonomous Equations  test  "
},
{
  "id": "fo8",
  "level": "1",
  "url": "fo8.html",
  "type": "Section",
  "number": "1.8",
  "title": "FO8: Bifurcations",
  "body": " FO8: Bifurcations  test  "
},
{
  "id": "so1",
  "level": "1",
  "url": "so1.html",
  "type": "Section",
  "number": "2.1",
  "title": "SO1: Linear HomogeneousDifferential Equations",
  "body": " SO1: Linear HomogeneousDifferential Equations     I can solve linear, homogenous differential equations of any order.       "
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
