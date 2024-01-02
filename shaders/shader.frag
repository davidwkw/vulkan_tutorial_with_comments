#version 450

// fragment shader does not have built-in variable for ouput, have to declare manually

layout(location=0) out vec4 outColor; // location represents index of frame buffer
layout(location = 0) in vec3 fragColor; // per vertex color input from vertex shader. The input variable does not necessarily have to use the same name as the vertex shader, they will be linked together using the indexes specified by the location directives.

void main() {
    outColor = vec4(1.0, 0.0, 0.0, 1.0); // represents normalized (r,g,b,a), range from 0 - 1. Result is the color red is written to this outColor variable that is linked to the first (and only) framebuffer at index 0.
}
