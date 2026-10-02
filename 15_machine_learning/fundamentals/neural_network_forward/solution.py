from fundamentals.matrix_multiply.solution import matrix_multiply
from fundamentals.stable_softmax.solution import softmax

def forward(features: list[float], hidden_weights: list[list[float]], hidden_bias: list[float], output_weights: list[list[float]], output_bias: list[float]) -> list[float]:
    hidden = matrix_multiply([features],hidden_weights)[0]
    if len(hidden) != len(hidden_bias):
        raise ValueError('Hidden bias dimension differs')
    hidden = [max(0.0,value+bias) for value,bias in zip(hidden,hidden_bias)]
    logits = matrix_multiply([hidden],output_weights)[0]
    if len(logits) != len(output_bias):
        raise ValueError('Output bias dimension differs')
    return softmax([value+bias for value,bias in zip(logits,output_bias)])
