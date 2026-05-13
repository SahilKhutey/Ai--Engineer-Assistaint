import numpy as np
import pytest
from packages.math_core.numerical_methods.engine import NumericalMathEngine

def test_linear_solver_accuracy():
    """
    Validates Ax = b solver for precision and correctness.
    """
    engine = NumericalMathEngine()
    
    # Define A and b
    A = np.array([
        [3, 2],
        [1, 2]
    ])
    b = np.array([5, 5])
    
    # Solve
    x = engine.solve_linear_system(A, b, method="direct")
    
    # Validate result: x should be [0, 2.5]
    assert np.allclose(x, [0, 2.5], atol=1e-8)

def test_eigenvalues_modal_foundation():
    """
    Validates eigenvalue computation, critical for modal analysis.
    """
    engine = NumericalMathEngine()
    
    # 2x2 Identity Matrix
    I = np.eye(2)
    
    # Eigenvalues of Identity matrix are all 1
    eigenvals = engine.compute_eigenvalues(I)
    assert np.allclose(eigenvals, [1, 1])

def test_sparse_matrix_efficiency():
    """
    Validates sparse matrix creation for large-scale FEM stability.
    """
    engine = NumericalMathEngine()
    data = np.array([1, 2, 3])
    indices = np.array([0, 1, 2])
    indptr = np.array([0, 1, 2, 3])
    
    sparse = engine.create_sparse_stiffness_matrix(data, indices, indptr, (3, 3))
    assert sparse.nnz == 3
    assert sparse.shape == (3, 3)
